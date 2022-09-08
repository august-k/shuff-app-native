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
      <TitleContainer backgroundColor={backgroundColor ?? border}>
        <Title textColor={contrastText}>{!hideTitle && title}</Title>
      </TitleContainer>
      <ValueContainer backgroundColor={lighten(0.15, board)}>
        <Value
          textColor={CONTRAST_TEXT_INVERSE[contrastText]}
          onChangeText={(value) =>
            dispatch((prev) => ({
              ...prev,
              gameDetails: {
                ...prev.gameDetails,
                [`${title}`]: +value,
              },
            }))
          }
          defaultValue={value ? `${value}` : undefined}
          keyboardType="number-pad"
        />
      </ValueContainer>
    </StyledBox>
  );
};

const NAV_ITEMS = [{ title: "Set Match Details" }];

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
        <Message>
          Game details are optional. Any details you fill out will be added to
          the bottom of the screenshot(s) you generate with{" "}
          <Bold>shuff.app</Bold>.
        </Message>
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

const TitleContainer = styled.View`
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 8px 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-radius: 4px;
`;

const Title = styled.Text`
  color: ${({ textColor }) => textColor};
  font-size: 13px;
  font-weight: bold;
  text-align: center;
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.8);
  text-transform: uppercase;
`;

const ValueContainer = styled.View`
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 8px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

const Value = styled.TextInput`
  color: ${({ textColor }) => textColor};
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  text-align: center;
`;

const Message = styled.Text`
  font-size: 11px;
  padding: 4px 8px;
  line-height: 15px;
`;

const Bold = styled.Text`
  font-weight: bold;
`;
