import styled from "styled-components/native";

type DiscProps = {
  size?: number;
  body?: {
    position: {
      x: number;
      y: number;
    };
  };
  color?: string;
  isActive?: boolean;
};

/**
 * @todo style disc to look more realistic
 * @see https://www.npmjs.com/package/react-native-inset-shadow
 * */
const Disc: React.FC<DiscProps> = ({ size, body, color }) => {
  const x = body.position.x - size / 2;
  const y = body.position.y - size / 2;

  return (
    <StyledDisc
      style={{
        top: y,
        left: x,
        width: size,
        height: size,
        backgroundColor: color,
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
