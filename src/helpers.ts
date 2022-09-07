import Matter from "matter-js";
import { DISC_OPTIONS } from "./constants";

export const isBetween = (x: number, min: number, max: number) =>
  x >= min && x <= max;

export const isInRange = (
  entities: {},
  touch: { event: any },
  size: number,
  func: () => void
) => {
  for (const key in entities) {
    if (key.startsWith("disc")) {
      const { x: dX, y: dY } = entities[key].body.position;
      const { pageX: tX, pageY: tY } = touch.event;
      const dS = size * 3;
      const xRange = isBetween(tX, dX - dS, dX + dS);
      const yRange = isBetween(tY, dY - dS, dY + dS);

      if (xRange && yRange) {
        func();
      }
    }
  }
};

/**
 * currently unused
 * @see https://github.com/liabru/matter-js/issues/840
 * @see https://github.com/liabru/matter-js/issues/285
 * */
export const limitMaxSpeed = (body) => {
  let maxSpeed = DISC_OPTIONS["maxSpeed"];

  if (body.velocity.x > maxSpeed) {
    Matter.Body.setVelocity(body, { x: maxSpeed, y: body.velocity.y });
  }

  if (body.velocity.x < -maxSpeed) {
    Matter.Body.setVelocity(body, { x: -maxSpeed, y: body.velocity.y });
  }

  if (body.velocity.y > maxSpeed) {
    Matter.Body.setVelocity(body, { x: body.velocity.x, y: maxSpeed });
  }

  if (body.velocity.y < -maxSpeed) {
    Matter.Body.setVelocity(body, { x: -body.velocity.x, y: -maxSpeed });
  }
};
