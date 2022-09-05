import Matter from "matter-js";
import styled from "styled-components/native";
import { useTheme } from "../../AppContext";
import {
  DISC_SIZE,
  DISC_RESTITUTION,
  DISC_FRICTION_AIR,
  DISC_COLLISION_CATEGORY,
} from "../constants";

/** @todo do we need body prop? */
type DiscProps = {
  body?: {
    position: {
      x: number;
      y: number;
    };
  };
  side?: "left" | "right";
};

export const DiscBody = (x: number, y: number) => {
  return Matter.Bodies.circle(x, y, DISC_SIZE, {
    restitution: DISC_RESTITUTION,
    frictionAir: DISC_FRICTION_AIR,
    collisionFilter: { category: DISC_COLLISION_CATEGORY },
  });
};

/**
 * @todo style disc to look more realistic
 * @see https://www.npmjs.com/package/react-native-inset-shadow
 * */
const Disc: React.FC<DiscProps> = ({ body, side = "left" }) => {
  const { biscuitColorLeft, biscuitColorRight } = useTheme();
  const x = body.position.x - DISC_SIZE / 2;
  const y = body.position.y - DISC_SIZE / 2;

  return (
    <StyledDisc
      style={{
        top: y,
        left: x,
        width: DISC_SIZE,
        height: DISC_SIZE,
        backgroundColor: side === "left" ? biscuitColorLeft : biscuitColorRight,
      }}
    />
  );
};

export default Disc;

const StyledDisc = styled.View`
  position: absolute;
  box-shadow: rgba(0, 0, 0, 0.44) 0px 2px 2px;
  z-index: 2;
  border-radius: 50%;
`;
