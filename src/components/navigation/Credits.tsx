import styled, { CSSProperties } from "styled-components/native";
import * as WebBrowser from "expo-web-browser";
import { useTheme } from "../../../AppContext";
import { CONTRAST_TEXT_INVERSE } from "../../utils";

const Credits: React.FC = () => {
  const { contrastText } = useTheme();
  return (
    <Container
      onPress={() => {
        WebBrowser.openBrowserAsync("https://fratino.dev");
      }}
    >
      <CreditsText textColor={CONTRAST_TEXT_INVERSE[contrastText]}>
        Built with <Heart>♥</Heart> by Adam Fratino
      </CreditsText>
    </Container>
  );
};

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
