import Matter from "matter-js";
import Disc, { DiscBody } from "../components/Disc";
let discIds = 0;

const CreateDisc = (entities, { touches, screen }) => {
  let world = entities["physics"].world;

  touches
    .filter((t) => t.type === "long-press")
    .forEach((t) => {
      let activeSide = t.event.pageX <= screen.width / 2 ? "left" : "right";
      let disc = DiscBody(t.event.pageX, t.event.pageY);

      Matter.World.add(world, [disc]);

      entities[++discIds] = {
        body: disc,
        side: activeSide,
        renderer: Disc,
      };
    });

  return entities;
};

export default CreateDisc;
