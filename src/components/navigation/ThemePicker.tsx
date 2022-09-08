import { lighten } from "polished";
import { useState } from "react";
import Accordion from "react-native-collapsible/Accordion";
import { useGlobalState } from "../../../AppContext";
import { DISCORD_LINK } from "../../constants";
import { Bold, Link, Message } from "../../primitives";
import * as themes from "../../themes";
import DropdownLink from "./DropdownLink";
import DropdownLinksContainer from "./DropdownLinksContainer";
import DropdownTitle from "./DropdownTitle";
import ShadowBar from "./ShadowBar";

const NAV_ITEMS = [{ title: "Choose a Theme", data: Object.keys(themes) }];

const ThemePicker: React.FC = () => {
  const { state: globalState, dispatch } = useGlobalState();
  const [state, setState] = useState({ activeSections: [] });
  const { board, border, contrastText } = globalState.theme;

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
      <DropdownLinksContainer>
        <ShadowBar backgroundColor={lighten(0.15, board)} />
        {section.data.map((item: string, i: number) => {
          const theme = themes[item];
          const isActive = theme["location"] === globalState.theme["location"];

          return (
            <DropdownLink
              isActive={isActive}
              emoji={theme.emoji}
              text={theme.location}
              onPress={() => dispatch((prev) => ({ ...prev, theme: theme }))}
              key={i}
            />
          );
        })}
        <Message>
          If you'd like to suggest a theme to add to <Bold>shuff.app</Bold>{" "}
          reach out to us in the <Bold>#suggestions-and-help</Bold> channel on
          our <Link url={DISCORD_LINK}>Discord server</Link>.
        </Message>
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
