import * as Linking from "expo-linking";
import styled, { CSSProperties } from "styled-components/native";

enum CONTRAST_INVERSE {
  black = "white",
  white = "black",
}

type Props = {
  backgroundColor: CSSProperties["backgroundColor"];
  contrastText: CSSProperties["color"];
};

const CommunityLink: React.FC<Props> = ({ backgroundColor, contrastText }) => (
  <DiscordButton
    backgroundColor={backgroundColor}
    onPress={() =>
      Linking.openURL(
        `https://discord.gg/.well-known/apple-app-site-association/invite/fBkg2nNYKH`
      )
    }
  >
    <DiscordButtonText color={CONTRAST_INVERSE[contrastText]}>
      Join the Community
    </DiscordButtonText>
  </DiscordButton>
);

export default CommunityLink;

/** @todo consolidate with DropdownTitle */
const DiscordButton = styled.Pressable`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 16px;
  border-radius: 8px;
  margin-top: 16px;
`;

const DiscordButtonText = styled.Text`
  color: ${({ color }) => color};
  font-weight: bold;
  font-size: 12px;
`;
