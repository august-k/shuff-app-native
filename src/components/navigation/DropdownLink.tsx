import { Text } from "react-native";
import styled, { CSSProperties } from "styled-components/native";

type Props = {
  text: string;
  emoji: string;
  textColor: CSSProperties["color"];
  backgroundColor?: CSSProperties["backgroundColor"];
  onPress?: () => void;
};

const DropdownLink: React.FC<Props> = ({
  text,
  emoji,
  textColor,
  backgroundColor,
  onPress,
}) => (
  <LinkContainer onPress={onPress}>
    <Title color={textColor}>{text}</Title>
    {emoji && <Text>{emoji}</Text>}
  </LinkContainer>
);

export default DropdownLink;

const LinkContainer = styled.Pressable`
  /* background-color: ${({ backgroundColor }) => backgroundColor}; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.Text`
  color: ${({ color }) => color};
  padding: 8px 0 8px 8px;
  font-size: 14px;
`;
