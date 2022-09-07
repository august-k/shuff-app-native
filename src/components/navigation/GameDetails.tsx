import { lighten } from "polished";
import { CSSProperties, useState } from "react";
import Accordion from "react-native-collapsible/Accordion";
import styled from "styled-components/native";
import { useGlobalState, useTheme } from "../../../AppContext";
import { CONTRAST_TEXT_INVERSE } from "../../utils";

import ShadowBar from "./ShadowBar";
import DropdownLinksContainer from "./DropdownLinksContainer";
import DropdownTitle from "./DropdownTitle";

type BoxProps = {
  backgroundColor?: CSSProperties["backgroundColor"];
  title: string;
  hideTitle?: boolean;
  value: number;
};

const Box: React.FC<BoxProps> = ({
  backgroundColor,
  title,
  value,
  hideTitle,
}) => {
  const { board, border, contrastText } = useTheme();
  const { dispatch } = useGlobalState();

  return (
    <StyledBox>
      <Title
        backgroundColor={backgroundColor ?? border}
        textColor={contrastText}
      >
        {!hideTitle && title}
      </Title>
      <Value
        textColor={CONTRAST_TEXT_INVERSE[contrastText]}
        backgroundColor={lighten(0.15, board)}
        onChangeText={(value) =>
          dispatch((prev) => ({
            ...prev,
            gameDetails: {
              ...prev.gameDetails,
              [`${title}`]: +value,
            },
          }))
        }
        defaultValue={value && `${value}`}
        keyboardType="number-pad"
      />
    </StyledBox>
  );
};

const NAV_ITEMS = [{ title: "Show Match Details" }];

const GameDetails: React.FC = () => {
  const { board, border, contrastText, biscuitColorLeft, biscuitColorRight } =
    useTheme();
  const [state, setState] = useState({ activeSections: [] });
  const { state: globalState } = useGlobalState();
  const { gameDetails } = globalState;

  const renderHeader = (section, _, isActive) => (
    <DropdownTitle
      backgroundColor={lighten(0.05, border)}
      textColor={contrastText}
      text={section.title}
      isActive={isActive}
    />
  );

  const renderContent = () => {
    return (
      <DropdownLinksContainer>
        <ShadowBar backgroundColor={lighten(0.15, board)} />
        <GameDetailsContainer>
          <Box title="frame" value={gameDetails["frame"]} />
          <Box title="shot" value={gameDetails["shot"]} />
        </GameDetailsContainer>
        <GameDetailsContainer>
          <Box
            title="leftScore"
            hideTitle
            value={gameDetails["leftScore"]}
            backgroundColor={biscuitColorLeft}
          />
          <Box
            title="rightScore"
            hideTitle
            value={gameDetails["rightScore"]}
            backgroundColor={biscuitColorRight}
          />
        </GameDetailsContainer>
      </DropdownLinksContainer>
    );
  };

  const updateSections = (activeSections) => {
    setState({ activeSections });
  };

  return (
    <>
      <Accordion
        underlayColor="transparent"
        sections={NAV_ITEMS}
        activeSections={state.activeSections}
        renderHeader={renderHeader}
        renderContent={renderContent}
        onChange={updateSections}
      />
    </>
  );
};

export default GameDetails;

const GameDetailsContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

const StyledBox = styled.View`
  flex: 50%;
  margin: 8px;
  box-shadow: rgba(0, 0, 0, 0.14) 0px 2px 2px;
`;

const Title = styled.Text`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ textColor }) => textColor};
  font-size: 13px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  padding: 8px 4px;
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.8);
`;

const Value = styled.TextInput`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ textColor }) => textColor};
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  padding: 8px;
`;
