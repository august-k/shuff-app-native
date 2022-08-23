import * as Linking from "expo-linking";
import styled, { CSSProperties } from "styled-components/native";
import { Button } from "../../primitives";

type Props = {
  backgroundColor: CSSProperties["backgroundColor"];
  textColor: CSSProperties["color"];
};

const CommunityLink: React.FC<Props> = ({ backgroundColor, textColor }) => (
  <Button
    backgroundColor={backgroundColor}
    textColor={textColor}
    onPress={() =>
      Linking.openURL(
        `https://discord.gg/.well-known/apple-app-site-association/invite/fBkg2nNYKH`
      )
    }
  >
    Join the Community
  </Button>
);

export default CommunityLink;
