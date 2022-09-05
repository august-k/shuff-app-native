import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";

import { useTheme } from "../../../AppContext";

import ThemePicker from "./ThemePicker";
import CommunityLinks from "./CommunityLinks";
import CaptureScreenshot from "./CaptureScreenshot";
import Credits from "./Credits";

const Sidebar: React.FC = () => {
  const { board } = useTheme();

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
        <ThemePicker />
        <CaptureScreenshot />
        <CommunityLinks />
        <Credits />
      </SafeAreaView>
    </ScrollView>
  );
};

export default Sidebar;
