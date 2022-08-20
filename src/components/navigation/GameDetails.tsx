import { lighten } from "polished";
import styled, { CSSProperties } from "styled-components/native";
import type { Theme } from "../../themes";

export enum CONTRAST_TEXT_INVERSE {
  black = "white",
  white = "black",
}

type BoxProps = {
  theme: GameDetailsProps["theme"];
  title: string;
  value: number;
  styledMargin?: CSSProperties["margin"];
};

const Box: React.FC<BoxProps> = ({ theme, title, value, styledMargin }) => {
  const { board, border, contrastText } = theme;

  return (
    <StyledBox styledMargin={styledMargin}>
      <Title
        backgroundColor={border}
        textColor={CONTRAST_TEXT_INVERSE[contrastText]}
      >
        {title}
      </Title>
      <Value textColor={contrastText} backgroundColor={lighten(0.15, board)}>
        {value}
      </Value>
    </StyledBox>
  );
};

type GameDetailsProps = {
  theme: Theme;
};

const GameDetails: React.FC<GameDetailsProps> = ({ theme }) => (
  <>
    <GameDetailsContainer>
      <Box title="Frame" value={7} theme={theme} styledMargin="0 4px 8px 0" />
      <Box title="Shot" value={4} theme={theme} styledMargin="0 0 8px 4px" />
    </GameDetailsContainer>
    <GameDetailsContainer>
      <Box title="Yellow" value={17} theme={theme} styledMargin="0 4px 8px 0" />
      <Box title="Black" value={31} theme={theme} styledMargin="0 0 8px 4px" />
    </GameDetailsContainer>
  </>
);

export default GameDetails;

const GameDetailsContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

const StyledBox = styled.View`
  flex: 50%;
  border: 1px solid black;
  ${({ styledMargin }) => styledMargin && `margin: ${styledMargin}`};
  box-sizing: border-box;
`;
const Title = styled.Text`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ textColor }) => textColor};
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  padding: 4px;
`;

const Value = styled.Text`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ textColor }) => textColor};
  font-size: 40px;
  font-weight: bold;
  text-align: center;
`;
