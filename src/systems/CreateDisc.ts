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

  touches
    .filter((t) => t.type === "long-press")
    .forEach((t) => {
      let activeSide = t.event.pageX <= screen.width / 2 ? "left" : "right";

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
        side: activeSide,
        renderer: Disc,
      };
    });

  return entities;
};

export default CreateDisc;
