import { Bodies, World } from "matter-js";
import { Disc } from "../components";
import {
  DISC_SIZE,
  DISC_FRICTION,
  DISC_RESTITUTION,
  DISC_COLLISION_CATEGORY,
} from "../constants";

let discIds = 0;

const CreateDisc = (entities, { touches, screen }) => {
  let world = entities["physics"].world;

  touches
    .filter((t) => t.type === "long-press")
    .forEach((t) => {
      console.log(t.event);
      let disc = Bodies.circle(t.event.pageX, t.event.pageY, DISC_SIZE, {
        restitution: DISC_RESTITUTION,
        friction: DISC_FRICTION,
        collisionFilter: { category: DISC_COLLISION_CATEGORY },
      });
      World.add(world, [disc]);

      entities[++discIds] = {
        body: disc,
        size: DISC_SIZE,
        color: "pink",
        isActive: false,
        renderer: Disc,
      };
    });

  return entities;
};

export default CreateDisc;
