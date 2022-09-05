import styled from "styled-components/native";
import { useTheme } from "../../AppContext";
import { DISC_SIZE } from "../constants";

type DiscProps = {
  body?: {
    position: {
      x: number;
      y: number;
    };
  };
};

/**
 * @todo style disc to look more realistic
 * @see https://www.npmjs.com/package/react-native-inset-shadow
 * */
const Disc: React.FC<DiscProps> = ({ body }) => {
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
        backgroundColor: biscuitColorLeft,
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
