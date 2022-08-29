import styled from "styled-components/native";

type DiscProps = {
  size: number;
  body?: {
    position: {
      x: number;
      y: number;
    };
  };
  color: string;
  isActive?: boolean;
};

/**
 * @todo style disc to look more realistic
 * @see https://www.npmjs.com/package/react-native-inset-shadow
 * */
const Disc: React.FC<DiscProps> = ({
  size = 16,
  body = { position: { x: 0, y: 0 } },
  color = "gold",
  isActive = false,
}) => {
  const x = body.position.x - size / 2;
  const y = body.position.y - size / 2;

  return (
    <StyledDisc
      // source={require("../assets/disc-overlay.png")}
      // resizeMode="cover"
      backgroundColor={color}
      style={{
        left: x,
        top: y,
        width: !isActive ? size : size * 2,
        height: !isActive ? size : size * 2,
        borderRadius: !isActive ? size / 2 : (size * 2) / 2,
      }}
    />
  );
};

export default Disc;

const StyledDisc = styled.View`
  position: absolute;
  background-color: ${({ backgroundColor }) => backgroundColor};
  box-shadow: rgba(0, 0, 0, 0.44) 0px 2px 2px;
`;
