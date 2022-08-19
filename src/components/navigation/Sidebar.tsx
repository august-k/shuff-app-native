import { lighten } from "polished";
import { useContext, useState } from "react";
import Accordion from "react-native-collapsible/Accordion";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, ScrollView } from "react-native";
import styled from "styled-components/native";
import * as themes from "../../themes";
import type { Theme } from "../../themes";
import DropdownLink from "./DropdownLink";
import DropdownTitle from "./DropdownTitle";
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
  const { board, contrastText } = theme;
  const [state, setState] = useState({ activeSections: [] });

  const _renderHeader = (section) => (
    <DropdownTitle
      backgroundColor={lighten(0.05, board)}
      text={section.title}
      textColor={contrastText}
      isCollapsed={true}
    />
  );

  const _renderContent = (section) => {
    return (
      <DropdownLinksContainer backgroundColor={lighten(0.15, board)}>
        <ShadowBar />
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
      </SafeAreaView>
    </ScrollView>
  );
};

export default Sidebar;

const DropdownLinksContainer = styled.View`
  transform: translateY(-5px);
  position: relative;
  border-radius: 5px;
  padding: 18px 8px 8px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  z-index: 1;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px;
`;

const ShadowBar = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 5px;
  background-color: tomato;
  box-shadow: rgba(0, 0, 0, 0.44) 0px 5px 5px;
`;
