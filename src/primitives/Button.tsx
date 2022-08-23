import Ionicons from "@expo/vector-icons/Ionicons";
import styled, { css, CSSProperties } from "styled-components/native";

type Props = {
  backgroundColor: CSSProperties["backgroundColor"];
  textColor: CSSProperties["color"];
  icon?: any;
  onPress?: (e: any) => void;
  children: string;
};

const Button: React.FC<Props> = ({
  backgroundColor,
  textColor,
  icon,
  onPress,
  children,
}) => (
  <StyledButton
    backgroundColor={backgroundColor}
    onPress={onPress}
    justifyContent={!icon ? "center" : "space-between"}
  >
    <StyledButtonText textColor={textColor}>{children}</StyledButtonText>
    {icon && <Ionicons name={icon} size={18} color={textColor} />}
  </StyledButton>
);

export default Button;

export const StaticButtonStyles = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 16px;
  border-radius: 8px;
`;

const StyledButton = styled.Pressable`
  ${StaticButtonStyles};
  background-color: ${({ backgroundColor }) => backgroundColor};
  justify-content: ${({ justifyContent }) => justifyContent};
`;

export const StaticButtonTextStyles = css`
  font-weight: bold;
  font-size: 13px;
`;

const StyledButtonText = styled.Text`
  ${StaticButtonTextStyles};
  color: ${({ textColor }) => textColor};
`;
