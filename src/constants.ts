import { Dimensions } from "react-native";

const { width } = Dimensions.get("screen");

export const DISC_OPTIONS = {
  size: Math.trunc(Math.max(width) / 12),
  restitution: 1,
  friction: 0.5,
  frictionAir: 0.02,
  frictionStatic: 0.02,
  density: 100,
  collisionCategory: 0x0001,
};
