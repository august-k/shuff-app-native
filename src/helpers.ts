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
