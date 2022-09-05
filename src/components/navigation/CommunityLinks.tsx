import * as Linking from "expo-linking";
import { lighten } from "polished";
import { Button } from "../../primitives";
import { useTheme } from "../../../AppContext";

const CommunityLink: React.FC = () => {
  const { border, contrastText } = useTheme();

  return (
    <Button
      style={{ marginTop: 16 }}
      backgroundColor={lighten(0.05, border)}
      textColor={contrastText}
      onPress={() =>
        Linking.openURL(
          `https://discord.gg/.well-known/apple-app-site-association/invite/fBkg2nNYKH`
        )
      }
    >
      Join the Community
    </Button>
  );
};

export default CommunityLink;
