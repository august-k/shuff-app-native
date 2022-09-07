import { DISC_OPTIONS } from "../constants";
import { isBetween } from "../helpers";

/**
 * @todo ignore inactive disc from move (index?)
 */
const MoveDisc = (entities, { touches }) => {
  touches
    .filter((t) => t.type === "move")
    .forEach((t) => {
      for (const key in entities) {
        if (key.startsWith("disc")) {
          const { body } = entities[key];
          const { x: dX, y: dY } = body.position;
          const { pageX: tX, pageY: tY } = t.event;
          const dS = DISC_OPTIONS["size"] * 2;
          const xRange = isBetween(tX, dX - dS, dX + dS);
          const yRange = isBetween(tY, dY - dS, dY + dS);

          if (xRange && yRange) {
            body.position = { x: tX, y: tY };
          }
        }
      }
    });

  return entities;
};

export default MoveDisc;
