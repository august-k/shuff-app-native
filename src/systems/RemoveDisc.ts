import { DISC_SIZE } from "../constants";

const distance = ([x1, y1], [x2, y2]) =>
  Math.sqrt(Math.abs(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)));

const RemoveDisc = (entities, { touches }) => {
  let world = entities.physics.world;

  touches
    .filter((t) => t.type === "long-press")
    .forEach((t) => {
      // console.log("remove-disc", entities);
      let startPos: [any, any] = [t.event.pageX, t.event.pageY];
      // let discId = Object.keys(entities).find((key) => {
      //   let body = entities[key].body;
      //   return (
      //     body &&
      //     distance([body.position.x, body.position.y], startPos) < DISC_SIZE
      //   );
      // });
    });

  return entities;
};

export default RemoveDisc;
