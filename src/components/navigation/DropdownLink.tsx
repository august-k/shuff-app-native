import { Text } from "react-native";
import styled, { CSSProperties } from "styled-components/native";

type Props = {
  text: string;
  emoji: string;
  textColor: CSSProperties["color"];
  backgroundColor?: CSSProperties["backgroundColor"];
  onPress?: () => void;
};

/** @todo add active state */
const DropdownLink: React.FC<Props> = ({ text, emoji, textColor, onPress }) => (
  <LinkContainer onPress={onPress}>
    <Title color={textColor}>{text}</Title>
    {emoji && <Text>{emoji}</Text>}
  </LinkContainer>
);

export default DropdownLink;

const LinkContainer = styled.Pressable`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.Text`
  color: ${({ color }) => color};
  padding: 8px 0 8px 8px;
  font-size: 14px;
  font-weight: bold;
`;
