import { lighten } from "polished";
import { useContext, useState } from "react";
import Accordion from "react-native-collapsible/Accordion";
import AppContext from "../../../AppContext";
import * as themes from "../../themes";
import type { Theme } from "../../themes";
import DropdownLinksContainer from "./DropdownLinksContainer";
import DropdownLink from "./DropdownLink";
import DropdownTitle from "./DropdownTitle";
import ShadowBar from "./ShadowBar";
import { CONTRAST_TEXT_INVERSE } from "../../utils";

type Props = {
  theme?: Theme;
};

const NAV_ITEMS = [
  {
    title: "Select a Theme",
    data: Object.keys(themes),
  },
];

const ThemePicker: React.FC<Props> = ({ theme }) => {
  const globals = useContext(AppContext);
  const [state, setState] = useState({ activeSections: [] });
  const { board, border, contrastText } = theme;

  const _renderHeader = (section, _, isActive) => (
    <DropdownTitle
      backgroundColor={lighten(0.05, border)}
      textColor={contrastText}
      text={section.title}
      isActive={isActive}
    />
  );

  const _renderContent = (section) => {
    return (
      <DropdownLinksContainer backgroundColor={lighten(0.15, board)}>
        <ShadowBar backgroundColor={lighten(0.15, board)} />
        {section.data.map((item: string, i: number) => {
          const theme = themes[item];
          return (
            <DropdownLink
              backgroundColor={lighten(0.15, board)}
              emoji={theme.emoji}
              text={theme.location}
              textColor={CONTRAST_TEXT_INVERSE[contrastText]}
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
    <Accordion
      underlayColor="transparent"
      sections={NAV_ITEMS}
      activeSections={state.activeSections}
      renderHeader={_renderHeader}
      renderContent={_renderContent}
      onChange={_updateSections}
    />
  );
};

export default ThemePicker;
