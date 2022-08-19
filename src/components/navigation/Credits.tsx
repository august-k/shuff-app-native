import styled, { CSSProperties } from "styled-components/native";
import * as WebBrowser from "expo-web-browser";

type Props = {
  textColor: CSSProperties["color"];
};

const Credits: React.FC<Props> = ({ textColor }) => (
  <Container
    onPress={() => {
      WebBrowser.openBrowserAsync("https://fratino.dev");
    }}
  >
    <CreditsText textColor={textColor}>
      Built with <Heart>♥</Heart> by Adam Fratino
    </CreditsText>
  </Container>
);

export default Credits;

const Container = styled.Pressable`
  margin-top: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 16px 0;
`;

const CreditsText = styled.Text`
  color: ${({ textColor }) => textColor};
  font-size: 11px;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const Heart = styled.Text`
  color: red;
`;
