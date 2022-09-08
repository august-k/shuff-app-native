import Matter from "matter-js";
import Disc, { DiscBody } from "../components/Disc";

let discIds = 0;

/**
 * @todo disc is being created on navigation swipe
 * */
const CreateDisc = (entities, { touches, screen }) => {
  let world = entities.physics.world;

  touches
    .filter((t) => t.type === "long-press")
    .forEach((t) => {
      let activeSide = t.event.pageX <= screen.width / 2 ? "left" : "right";
      let disc = DiscBody(t.event.pageX, t.event.pageY);

      Matter.World.add(world, [disc]);

      entities[`disc_${++discIds}`] = {
        body: disc,
        side: activeSide,
        renderer: Disc,
        isStatic: true,
      };
    });

  return entities;
};

export default CreateDisc;
