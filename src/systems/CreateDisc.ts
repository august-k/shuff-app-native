import { Bodies, World } from "matter-js";
import { Disc } from "../components";
import {
  DISC_SIZE,
  DISC_FRICTION,
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
      let activeColor =
        t.event.pageX <= screen.width / 2 ? discColors[0] : discColors[1];

      let disc = Bodies.circle(t.event.pageX, t.event.pageY, DISC_SIZE, {
        restitution: DISC_RESTITUTION,
        friction: DISC_FRICTION,
        density: DISC_DENSITY,
        mass: 50,
        collisionFilter: { category: DISC_COLLISION_CATEGORY },
      });
      World.add(world, [disc]);

      entities[++discIds] = {
        body: disc,
        size: DISC_SIZE,
        color: activeColor,
        renderer: Disc,
      };
    });

  return entities;
};

export default CreateDisc;
