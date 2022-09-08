import * as Linking from "expo-linking";
import { lighten } from "polished";
import { Button } from "../../primitives";
import { DISCORD_LINK } from "../../constants";
import { useTheme } from "../../../AppContext";

const CommunityLinks: React.FC = () => {
  const { border, contrastText } = useTheme();

  return (
    <Button
      style={{ marginTop: 16 }}
      backgroundColor={lighten(0.05, border)}
      textColor={contrastText}
      onPress={() => Linking.openURL(DISCORD_LINK)}
    >
      Join the Community
    </Button>
  );
};

export default CommunityLinks;
