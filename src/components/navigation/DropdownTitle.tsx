import Ionicons from "@expo/vector-icons/Ionicons";
import styled, { CSSProperties } from "styled-components/native";
import {
  StaticButtonStyles,
  StaticButtonTextStyles,
} from "../../primitives/Button";

type Props = {
  text: string;
  backgroundColor: CSSProperties["backgroundColor"];
  textColor: CSSProperties["color"];
  isActive: boolean;
};

const DropdownTitle: React.FC<Props> = ({
  text,
  textColor,
  backgroundColor,
  isActive,
}) => (
  <TitleContainer backgroundColor={backgroundColor} isActive={isActive}>
    <Title textColor={textColor}>{text}</Title>
    <Icon
      name="chevron-down"
      size={18}
      color={textColor}
      isActive={!isActive}
    />
  </TitleContainer>
);

export default DropdownTitle;

const TitleContainer = styled.View`
  ${StaticButtonStyles};

  margin-top: 16px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  ${({ isActive }) =>
    isActive &&
    `
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  `}
`;

const Title = styled.Text`
  ${StaticButtonTextStyles};
  color: ${({ textColor }) => textColor};
`;

const Icon = styled(Ionicons)`
  transform: ${({ isActive }) =>
    isActive ? `rotate(0deg)` : `rotate(180deg)`};
`;
