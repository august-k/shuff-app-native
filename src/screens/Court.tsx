import Matter from "matter-js";
import { Dimensions } from "react-native";
import { GameEngine } from "react-native-game-engine";
import { Disc, Court as CourtComponent } from "../components";
import { Physics, CreateDisc, MoveDisc, RemoveDisc } from "../systems";
import {
  DISC_SIZE,
  DISC_FRICTION,
  DISC_RESTITUTION,
  DISC_DENSITY,
  DISC_COLLISION_CATEGORY,
} from "../constants";

/**
 * @see https://brm.io/matter-js/
 * @see https://github.com/bberak/react-native-game-engine
 * @see https://codepen.io/colaru/pen/xxxqPNV
 * @see https://medium.com/@williamyang93/my-journey-with-react-native-game-engine-part-i-starting-the-project-bbebcd2ccf6
 * @see https://medium.com/@williamyang93/my-journey-with-react-native-game-engine-part-ii-adding-touch-and-bounce-b9ae3fac06b9
 */
const Court = ({ theme }) => {
  const {
    board,
    border,
    court: courtTheme,
    biscuitColorLeft,
    biscuitColorRight,
  } = theme;

  const { width, height } = Dimensions.get("screen");

  const engine = Matter.Engine.create({
    enableSleeping: false,
    isSensor: true,
  });
  const world = engine.world;
  const court = Matter.Bodies.rectangle(
    -width / 2,
    -height / 2,
    width,
    height,
    { isStatic: true }
  );

  const disc = Matter.Bodies.circle(width / 2, height / 2, DISC_SIZE, {
    restitution: DISC_RESTITUTION,
    friction: DISC_FRICTION,
    density: DISC_DENSITY,
    mass: 50,
    collisionFilter: { category: DISC_COLLISION_CATEGORY },
  });

  const constraint = Matter.Constraint.create({
    label: "Drag Constraint",
    pointA: { x: 0, y: 0 },
    pointB: { x: 0, y: 0 },
    length: 0.0001,
    stiffness: 0.1,
    angularStiffness: 1,
  });

  engine.world.gravity.y = 0;
  Matter.World.add(world, [disc, court]);
  Matter.World.addConstraint(world, constraint);

  return (
    <GameEngine
      style={{ flex: 1, backgroundColor: courtTheme }}
      systems={[Physics, CreateDisc, MoveDisc, RemoveDisc]}
      entities={{
        physics: { engine: engine, world: world, constraint: constraint },
        court: {
          body: court,
          fill: board,
          stroke: border,
          biscuitColorLeft: biscuitColorLeft,
          biscuitColorRight: biscuitColorRight,
          renderer: CourtComponent,
        },
        disc: {
          body: disc,
          size: DISC_SIZE,
          discColors: [biscuitColorLeft, biscuitColorRight],
          color: biscuitColorLeft,
          isActive: false,
          renderer: Disc,
        },
      }}
    />
  );
};

export default Court;
