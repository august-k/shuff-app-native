import { lighten } from "polished";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, View } from "react-native";

import { useGlobalState } from "../../../AppContext";
import { CONTRAST_TEXT_INVERSE } from "../../utils";

import ThemePicker from "./ThemePicker";
import CommunityLinks from "./CommunityLinks";
import Credits from "./Credits";

const Sidebar: React.FC = () => {
  const { state } = useGlobalState();
  const { board, border, contrastText } = state.theme;

  return (
    <ScrollView
      style={{
        backgroundColor: board,
        paddingHorizontal: 8,
        paddingVertical: 16,
      }}
    >
      <SafeAreaView>
        {/* <GameDetails theme={theme} /> */}
        <ThemePicker theme={state.theme} />
        <View style={{ marginBottom: 16 }} />
        <CommunityLinks
          backgroundColor={lighten(0.05, border)}
          textColor={contrastText}
        />
        <Credits textColor={CONTRAST_TEXT_INVERSE[contrastText]} />
      </SafeAreaView>
    </ScrollView>
  );
};

export default Sidebar;
