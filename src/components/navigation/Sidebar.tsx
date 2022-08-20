import { lighten } from "polished";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import type { Theme } from "../../themes";

import GameDetails from "./GameDetails";
import ThemePicker from "./ThemePicker";
import CommunityLinks from "./CommunityLinks";
import Credits from "./Credits";

type Props = {
  theme?: Theme;
};

const Sidebar: React.FC<Props> = ({ theme }) => {
  const { board, border, contrastText } = theme;

  return (
    <ScrollView
      style={{
        backgroundColor: board,
        paddingHorizontal: 8,
        paddingVertical: 16,
      }}
    >
      <SafeAreaView>
        <GameDetails theme={theme} />
        <ThemePicker theme={theme} />
        <CommunityLinks
          backgroundColor={lighten(0.05, border)}
          contrastText={contrastText}
        />
        <Credits textColor={contrastText} />
      </SafeAreaView>
    </ScrollView>
  );
};

export default Sidebar;
