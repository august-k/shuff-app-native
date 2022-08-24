import Ionicons from "@expo/vector-icons/Ionicons";
import styled, { CSSProperties } from "styled-components/native";

type NavIconProps = {
  color: CSSProperties["color"];
  backgroundColor: CSSProperties["backgroundColor"];
  onPress?: () => void;
};

const NavIcon: React.FC<NavIconProps> = ({
  color,
  backgroundColor,
  onPress,
}) => (
  <NavContainer>
    <StyledNavIcon
      name="menu-sharp"
      size={24}
      color={color}
      backgroundColor={backgroundColor}
      onPress={onPress}
    />
  </NavContainer>
);

export default NavIcon;

const NavContainer = styled.View`
  position: absolute;
  bottom: 16px;
  right: 16px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const StyledNavIcon = styled(Ionicons.Button)`
  padding: 8px 2px 8px 12px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;
