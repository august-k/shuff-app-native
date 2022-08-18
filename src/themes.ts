import { CSSProperties } from "styled-components";

type Theme = {
  board: CSSProperties["color"];
  court: CSSProperties["color"];
  border: CSSProperties["color"];
};

type Themes = Theme[];

export const green: Theme = {
  board: "#d1fae5", // emerald 100
  court: "#34d399", // emerald 400
  border: "#064e3b", // emerald 900
};

export const blue: Theme = {
  board: "#cffafe", // cyan 100
  court: "#22d3ee", // cyan 400
  border: "#164e63", // cyan 900
};
