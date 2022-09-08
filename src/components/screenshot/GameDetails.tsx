import { lighten } from "polished";
import styled from "styled-components/native";
import { useGlobalState } from "../../../AppContext";
import { CONTRAST_TEXT_INVERSE } from "../../utils";

const GameDetails: React.FC = () => {
  const { state } = useGlobalState();
  const { theme, gameDetails } = state;
  const {
    board,
    court,
    border,
    contrastText,
    biscuitColorLeft,
    biscuitColorRight,
  } = theme;

  // enum?
  const setTitleColor = (title: string) => {
    if (title === "leftScore") {
      return biscuitColorLeft;
    } else if (title === "rightScore") {
      return biscuitColorRight;
    } else {
      return border;
    }
  };

  return (
    <GameDetailsContainer backgroundColor={court}>
      {Object.entries(gameDetails).map(
        ([title, detail], i) =>
          gameDetails[`${title}`] && (
            <DetailContainer backgroundColor={lighten(0.05, board)} key={i}>
              <TitleContainer backgroundColor={setTitleColor(title)}>
                <Title textColor={contrastText}>
                  {title === "leftScore" || title === "rightScore" ? "" : title}
                </Title>
              </TitleContainer>
              <Detail>{detail}</Detail>
            </DetailContainer>
          )
      )}
    </GameDetailsContainer>
  );
};

export default GameDetails;

const GameDetailsContainer = styled.View`
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 4px 8px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const DetailContainer = styled.View`
  flex: 1;
  border-radius: 4px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ?? "transparent"};
  box-shadow: rgba(0, 0, 0, 0.14) 0px 2px 2px;
  margin: 8px;
  padding-bottom: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TitleContainer = styled.View`
  ${({ backgroundColor }) => `background-color: ${backgroundColor}`};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  width: 100%;
  margin-bottom: 4px;
`;

const Title = styled.Text`
  color: ${({ textColor }) => textColor};
  text-transform: uppercase;
  font-size: 10px;
  font-weight: bold;
  padding: 4px; 0;
  text-align: center;
  
`;

const Detail = styled.Text`
  font-size: 14px;
`;
