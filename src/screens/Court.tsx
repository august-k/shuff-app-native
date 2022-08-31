import Matter from "matter-js";
import { useState } from "react";
import { Dimensions } from "react-native";
import { GameEngine } from "react-native-game-engine";
import { SafeAreaView } from "react-native-safe-area-context";
import { Disc, Court as CourtComponent, NavIcon } from "../components";

const { width, height } = Dimensions.get("screen");

const STARTING_POSITIONS = {
  disc0: { x: width / 2, y: height / 2 },
};

const discSize = Math.trunc(Math.max(width) / 12);
const disc0 = Matter.Bodies.circle(
  STARTING_POSITIONS.disc0.x,
  STARTING_POSITIONS.disc0.y,
  discSize,
  {
    restitution: 1,
    friction: 0.15,
    collisionFilter: { category: 0x0001 },
  }
);
const court = Matter.Bodies.rectangle(-width / 2, -height / 2, width, height, {
  isStatic: true,
});
const engine = Matter.Engine.create({ enableSleeping: false, isSensor: true });
const world = engine.world;

/** make gravity overhead */
engine.world.gravity.y = 0;

Matter.World.add(world, [disc0, court]);

/**
 * @see https://brm.io/matter-js/
 * @see https://github.com/bberak/react-native-game-engine
 * @see https://codepen.io/colaru/pen/xxxqPNV
 * @see https://medium.com/@williamyang93/my-journey-with-react-native-game-engine-part-i-starting-the-project-bbebcd2ccf6
 * @see https://medium.com/@williamyang93/my-journey-with-react-native-game-engine-part-ii-adding-touch-and-bounce-b9ae3fac06b9
 */
const Court = ({ navigation, theme }) => {
  const { board, border, court, biscuitColorLeft, biscuitColorRight } = theme;
  const [discPosition, setDiscPosition] = useState({
    x: STARTING_POSITIONS.disc0.x,
    y: STARTING_POSITIONS.disc0.y,
  });

  const MoveDisc = (entities, { touches, time }) => {
    touches
      .filter((t) => t.type === "move")
      .forEach((t) => {
        setDiscPosition({
          x: t.event.pageX + t.delta.pageX,
          y: t.event.pageY + t.delta.pageY,
        });
        Matter.Body.setPosition(disc0, {
          x: discPosition.x,
          y: discPosition.y,
        });
      });
    Matter.Body.set(disc0, "size");
    Matter.Engine.update(engine, time.delta);

    return entities;
  };

  const EndTouch = (entities, { touches, time }) => {
    touches
      .filter((t) => t.type === "end")
      .forEach((t) => {
        // console.log("end touch", t);
        // Matter.Body.applyForce(
        //   disc0,
        //   { x: 0, y: 0 },
        //   { x: 0.01, y: 0.01 }
        // );
      });

    Matter.Engine.update(engine, time.delta);

    return entities;
  };

  return (
    <GameEngine
      style={{ flex: 1, backgroundColor: court }}
      systems={[MoveDisc, EndTouch]}
      entities={{
        physics: {
          engine: engine,
          world: world,
        },
        court: {
          body: court,
          fill: board,
          stroke: border,
          biscuitColorLeft: biscuitColorLeft,
          biscuitColorRight: biscuitColorRight,
          renderer: (props) => (
            <SafeAreaView>
              <CourtComponent {...props} backgroundColor="gold" />
            </SafeAreaView>
          ),
        },
        disc0: {
          body: disc0,
          size: discSize,
          color: biscuitColorLeft,
          renderer: Disc,
        },
      }}
    >
      <NavIcon
        color={border}
        backgroundColor={board}
        onPress={() => navigation.openDrawer()}
      />
    </GameEngine>
  );
};

export default Court;
