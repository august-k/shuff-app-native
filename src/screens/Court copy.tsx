import Matter from "matter-js";
import { useEffect, useState } from "react";
import { Dimensions, Pressable } from "react-native";
import { GameEngine, GameLoop } from "react-native-game-engine";
import { SafeAreaView } from "react-native-safe-area-context";
// import styled from "styled-components/native";
import { Disc, Court as CourtComponent, NavIcon } from "../components";
// import type { CourtProps } from "../components/Court";

const { width, height } = Dimensions.get("screen");
const discSize = Math.trunc(Math.max(width) / 12);
const discCategory = 0x0001;
const disc0 = Matter.Bodies.circle(width / 2, height / 2, discSize, {
  restitution: 1,
  friction: 0.15,
  collisionFilter: { category: discCategory },
});
const disc1 = Matter.Bodies.circle(width / 3, height / 3, discSize, {
  restitution: 1,
  friction: 0.9,
  collisionFilter: { category: discCategory },
});
const court = Matter.Bodies.rectangle(0, 0, width, height, { isStatic: true });
const engine = Matter.Engine.create({ enableSleeping: false, isSensor: true });
const world = engine.world;

Matter.World.add(world, [disc0, disc1, court]);

/**
 * @see https://brm.io/matter-js/
 * @see https://github.com/bberak/react-native-game-engine
 * @see https://codepen.io/colaru/pen/xxxqPNV
 * @see https://medium.com/@williamyang93/my-journey-with-react-native-game-engine-part-i-starting-the-project-bbebcd2ccf6
 * @see https://medium.com/@williamyang93/my-journey-with-react-native-game-engine-part-ii-adding-touch-and-bounce-b9ae3fac06b9
 */
const Court = ({ navigation, theme }) => {
  const { board, border, court, biscuitColorLeft, biscuitColorRight } = theme;
  // const [touchIsActive, setTouchIsActive] = useState(false);
  // const [discIsMoving, setDiscIsMoving] = useState(false);
  // const [touchPosition, setTouchPosition] = useState({ x: 0, y: 0 });
  // const [discPosition, setDiscPosition] = useState({
  //   x: width / 2,
  //   y: height / 2,
  // });

  const Physics = (entities, { touches, time }) => {
    let engine = entities.physics.engine;
    let disc0 = entities.disc0.body;
    let disc1 = entities.disc1.body;
    engine.world.gravity.y = 0;

    touches
      .filter((t) => t.type === "move")
      .forEach((t) => {
        console.log(t);
        Matter.Body.applyForce(
          disc0,
          { x: t.pageX, y: t.pageY },
          { x: 0.001, y: 0.001 }
        );
      });

    Matter.Engine.update(engine, time.delta);

    return entities;
  };

  // const _onUpdate = ({ touches }) => {
  //   let move = touches.find((x) => x.type === "move");

  //   const { x: discX, y: discY } = discPosition;
  //   const { x: touchX, y: touchY } = touchPosition;
  //   const touchBoundaryThreshold = 25;
  //   const touchBoundaryX =
  //     touchX >= discX - touchBoundaryThreshold &&
  //     touchX <= discX + touchBoundaryThreshold;
  //   const touchBoundaryY =
  //     touchY >= discY - touchBoundaryThreshold &&
  //     touchY <= discY + touchBoundaryThreshold;

  //   if (move) {
  //     setTouchPosition({
  //       x: move.event.pageX,
  //       y: move.event.pageY,
  //     });
  //   }

  //   if (move && touchBoundaryX && touchBoundaryY) {
  //     setDiscIsMoving(true);
  //     setDiscPosition({
  //       x: discX + move.delta.pageX,
  //       y: discY + move.delta.pageY,
  //     });
  //   }
  // };

  return (
    // <Pressable
    //   style={{ flex: 1, backgroundColor: court }}
    //   onPressIn={() => setTouchIsActive(true)}
    //   onPressOut={() => {
    //     setTouchIsActive(false);
    //     setDiscIsMoving(false);
    //   }}
    // >
    <GameEngine
      systems={[Physics]}
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
        disc0: {
          body: disc0,
          size: discSize,
          color: biscuitColorLeft,
          onPressIn: (e) => console.log("pI", e.nativeEvent),
          onPressOut: (e) => console.log("pO", e.nativeEvent),
          renderer: Disc,
        },
        disc1: {
          body: disc1,
          size: discSize,
          color: biscuitColorRight,
          renderer: Disc,
        },
      }}
    >
      {/* <GameLoop onUpdate={_onUpdate}>
          <Disc
            body={{ position: { x: discPosition.x, y: discPosition.y } }}
            size={discSize}
            color={biscuitColorLeft}
            isActive={touchIsActive && discIsMoving}
          />
        </GameLoop> */}
      <NavIcon
        color={border}
        backgroundColor={board}
        onPress={() => navigation.openDrawer()}
      />
    </GameEngine>
    // </Pressable>
  );
};

export default Court;
