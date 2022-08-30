export type Coordinate = {
  x: number;
  y: number;
};

export type Line = {
  a: number;
  b: number;
  c: number;
};

export type Quadrilateral = {
  a: Coordinate;
  b: Coordinate;
  c: Coordinate;
  d: Coordinate;
}

export enum CONTRAST_TEXT_INVERSE {
  black = "white",
  white = "black",
}

export function findXIntercept(pA: Coordinate, pB: Coordinate, yIntercept: number): number {
  // Arguments should be one side of the disc, one of the shooting locations, and the desired y-value of the intersection
  if (pA.y == pB.y) {
    /*
    Horizontal line, there is no x-intercept
    Also, this shouldn't happen as one of the
    biscuits is off screen
    */
    throw 'Blocking disc is in the shooting area';
  }
  return (pB.x - pA.x) / (pB.y - pA.y) * (yIntercept - pA.y) + pA.x;
}

export function generatePolygonPoints(discCenter: Coordinate, leftCoordinate: Coordinate, rightCoordinate: Coordinate, discRadius: number): Quadrilateral {
  // get the left and right sides of the disc
  const pA: Coordinate = { x: discCenter[0] - discRadius, y: discCenter[1] };
  const pB: Coordinate = { x: discCenter[0] + discRadius, y: discCenter[1] };
  // find the lines one the left and the right
  const leftLine: Line = getLineBetweenPoints(pA, leftCoordinate);
  const rightLine: Line = getLineBetweenPoints(pB, rightCoordinate);
  // solve the resulting system of equations for the intersection
  // TODO: add some error handling for the possible exception (although the exception should never happen)
  const intersection: Coordinate = solveSystemOfEquations(leftLine, rightLine);
  if (intersection[1] > 0) {
    // Lines intersect on the board, just draw the triangle
    return { a: pA, b: intersection, c: intersection, d: pB }
  }
  // Lines either don't intersect (shouldn't be possible) or intersect
  // off the board so we're drawing the full quadrilateral
  // TODO: add some error handling for the possible exception (although the exception should never happen)
  const leftIntercept: Coordinate = { x: findXIntercept(pA, leftCoordinate, 0), y: 0 };
  const rightIntercept: Coordinate = { x: findXIntercept(pB, rightCoordinate, 0), y: 0 };
  return { a: pA, b: leftIntercept, c: rightIntercept, d: pB };
}

export function getLineBetweenPoints(pA: Coordinate, pB: Coordinate): Line {
  // Return [A, B, C] for a line of the form Ax + By + C = 0
  if (pA[0] == pB[0]) {
    // Vertical line
    return { a: 1, b: 0, c: -pA.x }
  }
  if (pA[1] == pB[1]) {
    // Horizontal line
    return { a: 0, b: 1, c: -pA.y };
  }
  const slope = (pB[1] - pA[1]) / (pB[0] - pA[0]);
  return { a: -slope, b: 1, c: slope * pA.x - pA.y };
}

export function solveSystemOfEquations(lA: Line, lB: Line): Coordinate {
  /*
  Calculate the intersection of two lines of the form
  Ax + By + C = 0
  */
  const d = lA[0] * lB[1] - lB[0] * lA[1];
  const dX = -lA[2] * lB[1] + lB[2] * lA[1];
  const dY = lA[0] * -lB[2] + lB[0] * lA[2];
  if (d !== 0) {
    return { x: dX / d, y: dY / d };
  } else {
    throw 'Singular matrix'
  }
}
