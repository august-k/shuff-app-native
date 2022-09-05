import Matter from "matter-js";
import { Dimensions } from "react-native";
import { GameEngine } from "react-native-game-engine";
import { useTheme } from "../../AppContext";
import { Disc, Court as CourtComponent } from "../components";
import { Physics, CreateDisc, MoveDisc, RemoveDisc } from "../systems";
import {
  DISC_SIZE,
  DISC_FRICTION,
  DISC_FRICTION_AIR,
  DISC_FRICTION_STATIC,
  DISC_RESTITUTION,
  DISC_DENSITY,
  DISC_COLLISION_CATEGORY,
} from "../constants";

/**
 * @see https://brm.io/matter-js/
 * @see https://github.com/bberak/react-native-game-engine-handbook
 * @see https://codepen.io/colaru/pen/xxxqPNV
 * @see https://github.com/niviso/react-native-pong
 * @see https://pusher.com/tutorials/react-native-pong-game/
 */
const Court = () => {
  const { court: courtTheme } = useTheme();

  const { width, height } = Dimensions.get("screen");

  const engine = Matter.Engine.create({ enableSleeping: false });
  const world = engine.world;
  const court = Matter.Bodies.rectangle(-width, -height, width, height, {
    isStatic: true,
  });

  const disc = Matter.Bodies.circle(width / 2, height / 2, DISC_SIZE, {
    restitution: DISC_RESTITUTION,
    friction: DISC_FRICTION,
    frictionAir: DISC_FRICTION_AIR,
    frictionStatic: DISC_FRICTION_STATIC,
    density: DISC_DENSITY,
    inertia: 0,
    collisionFilter: { category: DISC_COLLISION_CATEGORY },
  });

  /** @todo wtf is constraint? */
  const constraint = Matter.Constraint.create({
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
        court: { body: court, renderer: CourtComponent },
        disc: { body: disc, renderer: Disc },
      }}
    />
  );
};

export default Court;
