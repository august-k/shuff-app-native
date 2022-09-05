import Matter from "matter-js";
import styled from "styled-components/native";
import { useTheme } from "../../AppContext";
import { DISC_OPTIONS } from "../constants";

/** @todo do we need body prop? */
type DiscProps = {
  body?: { position: { x: number; y: number } };
  side?: "left" | "right";
};

const { size, restitution, frictionAir, collisionCategory } = DISC_OPTIONS;

export const DiscBody = (x: number, y: number) => {
  return Matter.Bodies.circle(x, y, size, {
    restitution: restitution,
    frictionAir: frictionAir,
    collisionFilter: { category: collisionCategory },
  });
};

const Disc: React.FC<DiscProps> = ({ body, side = "left" }) => {
  const { biscuitColorLeft, biscuitColorRight } = useTheme();
  const bgColor = side === "left" ? biscuitColorLeft : biscuitColorRight;
  const x = body.position.x - size / 2;
  const y = body.position.y - size / 2;
  const styles = {
    top: y,
    left: x,
    width: size,
    height: size,
    backgroundColor: bgColor,
  };

  return <StyledDisc style={styles} />;
};

export default Disc;

const StyledDisc = styled.View`
  position: absolute;
  box-shadow: rgba(0, 0, 0, 0.44) 0px 2px 2px;
  z-index: 2;
  border-radius: 50%;
`;
