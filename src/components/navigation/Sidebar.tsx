import { lighten } from "polished";
import { useContext, useState } from "react";
import Accordion from "react-native-collapsible/Accordion";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import * as themes from "../../themes";
import type { Theme } from "../../themes";
import CommunityLinks from "./CommunityLinks";
import Credits from "./Credits";
import DropdownLinksContainer from "./DropdownLinksContainer";
import DropdownLink from "./DropdownLink";
import DropdownTitle from "./DropdownTitle";
import ShadowBar from "./ShadowBar";
import AppContext from "../../../AppContext";

type Props = {
  theme?: Theme;
};

const NAV_ITEMS = [
  {
    title: "Select a Theme",
    data: Object.keys(themes),
  },
];

const Sidebar: React.FC<Props> = ({ theme }) => {
  const globals = useContext(AppContext);
  const { board, border, contrastText } = theme;
  const [state, setState] = useState({ activeSections: [] });

  const _renderHeader = (section, _, isActive) => (
    <DropdownTitle
      backgroundColor={lighten(0.05, board)}
      text={section.title}
      textColor={contrastText}
      isActive={isActive}
    />
  );

  const _renderContent = (section) => {
    return (
      <DropdownLinksContainer backgroundColor={lighten(0.15, board)}>
        <ShadowBar backgroundColor={lighten(0.15, board)} />
        {section.data.map((item, i) => {
          const theme = themes[item];
          return (
            <DropdownLink
              backgroundColor={lighten(0.15, board)}
              emoji={theme.emoji}
              text={theme.location}
              textColor={contrastText}
              key={i}
              onPress={() => globals.setActiveTheme(theme)}
            />
          );
        })}
      </DropdownLinksContainer>
    );
  };

  const _updateSections = (activeSections) => {
    setState({ activeSections });
  };

  return (
    <ScrollView
      style={{
        backgroundColor: board,
        paddingHorizontal: 8,
        paddingVertical: 16,
      }}
    >
      <SafeAreaView>
        <Accordion
          underlayColor="transparent"
          sections={NAV_ITEMS}
          activeSections={state.activeSections}
          renderHeader={_renderHeader}
          renderContent={_renderContent}
          onChange={_updateSections}
        />
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
