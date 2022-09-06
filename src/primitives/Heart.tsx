import { CSSProperties } from "styled-components/native";
import { Text } from "react-native";

type HeartProps = {
  color?: CSSProperties["color"];
  size?: CSSProperties["fontSize"];
};

const Heart: React.FC<HeartProps> = ({ color = "red", size = 11 }) => (
  <Text style={{ color: color, fontSize: size }}>♥</Text>
);

export default Heart;
