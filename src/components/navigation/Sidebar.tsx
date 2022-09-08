import { forwardRef } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useTheme } from "../../../AppContext";

import GameDetails from "./GameDetails";
import ThemePicker from "./ThemePicker";
import CommunityLinks from "./CommunityLinks";
import CaptureScreenshot from "./CaptureScreenshot";
import Credits from "./Credits";
import TogglePhysics from "./TogglePhysics";

const Sidebar = forwardRef((props, ref) => {
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
        <ThemePicker />
        <GameDetails />
        <CaptureScreenshot ref={ref} />
        {/* <TogglePhysics /> */}
        <CommunityLinks />
        <Credits />
      </SafeAreaView>
    </ScrollView>
  );
});

export default Sidebar;
