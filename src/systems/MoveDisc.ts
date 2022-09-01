import { DISC_SIZE } from "../constants";

const distance = ([x1, y1], [x2, y2]) =>
  Math.sqrt(Math.abs(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)));

const MoveDisc = (entities, { touches }) => {
  let constraint = entities["physics"].constraint;

  let start = touches.find((t) => t.type === "start");
  if (start) {
    let startPos: [any, any] = [start.event.pageX, start.event.pageY];
    let discId = Object.keys(entities).find((key) => {
      let body = entities[key].body;

      return (
        body &&
        distance([body.position.x, body.position.y], startPos) < DISC_SIZE
      );
    });

    if (discId) {
      constraint.pointA = { x: startPos[0], y: startPos[1] };
      constraint.bodyB = entities[discId].body;
      constraint.pointB = { x: 0, y: 0 };
      constraint.angleB = entities[discId].body.angle;
    }
  }

  let move = touches.find((t) => t.type === "move");
  if (move) {
    console.log(move);
    constraint.pointA = { x: move.event.pageX, y: move.event.pageY };
  }

  let end = touches.find((t) => t.type === "end");
  if (end) {
    constraint.pointA = null;
    constraint.bodyB = null;
    constraint.pointB = null;
  }

  return entities;
};

export default MoveDisc;
