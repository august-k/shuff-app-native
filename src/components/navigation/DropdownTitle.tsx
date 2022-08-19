import Ionicons from "@expo/vector-icons/Ionicons";
import styled, { CSSProperties } from "styled-components/native";

type Props = {
  text: string;
  backgroundColor: CSSProperties["backgroundColor"];
  textColor: CSSProperties["color"];
  isCollapsed: boolean;
};

const DropdownTitle: React.FC<Props> = ({
  text,
  textColor,
  backgroundColor,
  isCollapsed = false,
}) => (
  <TitleContainer backgroundColor={backgroundColor}>
    <Title color={textColor}>{text}</Title>
    <Icon
      name="chevron-down"
      size={18}
      color={textColor}
      isCollapsed={!isCollapsed}
    />
  </TitleContainer>
);

export default DropdownTitle;

const TitleContainer = styled.View`
  background-color: ${({ backgroundColor }) => backgroundColor};
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px;
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  z-index: 2;
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ color }) => color};
`;

const Icon = styled(Ionicons)`
  transform: ${({ isCollapsed }) =>
    isCollapsed ? `rotate(180deg)` : `rotate(0deg)`};
`;
