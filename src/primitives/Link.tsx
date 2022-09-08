import * as Linking from "expo-linking";
import { styled } from "styled-components/native";
import { Pressable } from "react-native";

type LinkProps = {
  url: string;
};

const Link: React.FC<LinkProps> = ({ url, children }) => (
  <Pressable onPress={() => Linking.openURL(url)}>
    <StyledText>{children}</StyledText>
  </Pressable>
);

export default Link;

const StyledText = styled.Text`
  font-size: 11px;
  padding: 4px 8px;
  line-height: 15px;
`;
