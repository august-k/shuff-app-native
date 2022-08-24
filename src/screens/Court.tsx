// import Matter from "matter-js";
import { useState } from "react";
import { Dimensions } from "react-native";
import { GameEngine, GameLoop } from "react-native-game-engine";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { Disc, Court as CourtComponent, NavIcon } from "../components";
import type { CourtProps } from "../components/Court";

const { width, height } = Dimensions.get("screen");
const discSize = Math.trunc(Math.max(width) / 12);
// const discCategory = 0x0001;
// const disc = Matter.Bodies.circle(width / 2, height / 2, discSize, {
//   restitution: 1,
//   friction: 0.3,
//   collisionFilter: { category: discCategory },
// });
// const court = Matter.Bodies.rectangle(0, 0, width, height, { isStatic: true });
// const engine = Matter.Engine.create({ enableSleeping: false, isSensor: true });
// const world = engine.world;

// Matter.World.add(world, [disc, court]);

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
    x: width / 2,
    y: height / 2,
  });

  // const Physics = (entities, { time }) => {
  //   let engine = entities["physics"].engine;
  //   Matter.Engine.update(engine, time.delta);
  //   return entities;
  // };

  const _onUpdate = ({ touches }) => {
    let move = touches.find((x) => x.type === "move");
    if (move) {
      setDiscPosition({
        x: discPosition.x + move.delta.pageX,
        y: discPosition.y + move.delta.pageY,
      });
    }
  };

  return (
    <GameEngine
      style={{ flex: 1, backgroundColor: court }}
      entities={{
        // physics: {
        //   engine: engine,
        //   world: world,
        // },
        court: {
          body: court,
          fill: board,
          stroke: border,
          biscuitColorLeft: biscuitColorLeft,
          biscuitColorRight: biscuitColorRight,
          renderer: (props) => (
            <SafeAreaView
              style={{
                position: "absolute",
                width: width,
                height: height,
              }}
            >
              <CourtComponent {...props} />
            </SafeAreaView>
          ),
        },
        // disc0: {
        //   body: disc,
        //   size: discSize,
        //   color: biscuitColorLeft,
        //   renderer: Disc,
        // },
      }}
    >
      <GameLoop onUpdate={_onUpdate}>
        <Disc
          body={{ position: { x: discPosition.x, y: discPosition.y } }}
          size={discSize}
          color={biscuitColorLeft}
        />
      </GameLoop>
      <NavIcon
        color={border}
        backgroundColor={board}
        onPress={() => navigation.openDrawer()}
      />
    </GameEngine>
  );
};

export default Court;
