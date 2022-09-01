import { Dimensions } from "react-native";

const { width } = Dimensions.get("screen");

export const DISC_SIZE = Math.trunc(Math.max(width) / 12);
export const DISC_RESTITUTION = 1;
export const DISC_FRICTION = 0.5;
export const DISC_FRICTION_AIR = 0.019;
export const DISC_FRICTION_STATIC = 0.022;
export const DISC_DENSITY = 100;
export const DISC_COLLISION_CATEGORY = 0x0001;
