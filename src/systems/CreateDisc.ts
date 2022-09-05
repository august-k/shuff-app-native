import { Bodies, World } from "matter-js";
import { Disc } from "../components";
import {
  DISC_SIZE,
  DISC_FRICTION,
  DISC_FRICTION_AIR,
  DISC_FRICTION_STATIC,
  DISC_RESTITUTION,
  DISC_DENSITY,
  DISC_COLLISION_CATEGORY,
} from "../constants";

let discIds = 0;

const CreateDisc = (entities, { touches, screen }) => {
  let world = entities["physics"].world;
  let { discColors } = entities["disc"];

  touches
    .filter((t) => t.type === "long-press")
    .forEach((t) => {
      // let activeColor =
      //   t.event.pageX <= screen.width / 2 ? discColors[0] : discColors[1];

      let disc = Bodies.circle(t.event.pageX, t.event.pageY, DISC_SIZE, {
        restitution: DISC_RESTITUTION,
        friction: DISC_FRICTION,
        frictionAir: DISC_FRICTION_AIR,
        frictionStatic: DISC_FRICTION_STATIC,
        density: DISC_DENSITY,
        inertia: 0,
        collisionFilter: { category: DISC_COLLISION_CATEGORY },
      });
      World.add(world, [disc]);

      entities[++discIds] = {
        body: disc,
        renderer: Disc,
      };
    });

  return entities;
};

export default CreateDisc;
