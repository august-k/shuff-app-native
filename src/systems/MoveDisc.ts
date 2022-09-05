import { DISC_OPTIONS } from "../constants";
import { isBetween } from "../helpers";

const MoveDisc = (entities, { touches }) => {
  touches
    .filter((t) => t.type === "move")
    .forEach((t) => {
      for (const key in entities) {
        if (key.startsWith("disc")) {
          const { x: dX, y: dY } = entities[key].body.position;
          const { pageX: tX, pageY: tY } = t.event;
          const dS = DISC_OPTIONS["size"];
          const xRange = isBetween(tX, dX - dS, dX + dS);
          const yRange = isBetween(tY, dY - dS, dY + dS);

          if (xRange && yRange) {
            entities[key].body.position = { x: tX, y: tY };
          }
        }
      }
    });

  return entities;
};

export default MoveDisc;
