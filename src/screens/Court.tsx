import { useDrawerStatus } from "@react-navigation/drawer";
import Matter from "matter-js";
import { lighten } from "polished";
import { forwardRef, useEffect } from "react";
import { Dimensions } from "react-native";
import { GameEngine } from "react-native-game-engine";
import ViewShot from "react-native-view-shot";
import styled from "styled-components/native";
import { useGlobalState } from "../../AppContext";
import CourtComponent, { CourtBody } from "../components/Court";
import Disc, { DiscBody } from "../components/Disc";
import Watermark from "../components/Watermark";
import { Physics, CreateDisc, MoveDisc } from "../systems";

/**
 * @todo add Scoreboard Watermark titles
 *
 * @see https://brm.io/matter-js/
 * @see https://github.com/bberak/react-native-game-engine-handbook
 * @see https://codepen.io/colaru/pen/xxxqPNV
 * @see https://github.com/niviso/react-native-pong
 * @see https://pusher.com/tutorials/react-native-pong-game/
 */
const Court = forwardRef<any, any>((props, ref) => {
  const { state, dispatch } = useGlobalState();
  const { showWatermark, gameDetails } = state;
  const { board, court: courtColor } = state.theme;
  const { width, height } = Dimensions.get("screen");
  const isDrawerOpen = useDrawerStatus() === "open";

  const engine = Matter.Engine.create({
    enableSleeping: false,
    gravity: { x: 0, y: 0 },
    speed: 0.1,
  });

  const world = engine.world;
  const disc = DiscBody(width / 2, height / 2);
  const court = CourtBody(-width, -height, width, height);

  Matter.World.add(world, [disc, court]);

  useEffect(() => {
    dispatch((prev) => ({ ...prev, showWatermark: isDrawerOpen }));
  }, [isDrawerOpen]);

  useEffect(() => {
    console.log("toggle physics here");
  }, [state.isPhysicsActive]);

  return (
    <ViewShot
      ref={ref}
      options={{ format: "jpg", quality: 1.0 }}
      style={{ flex: 1 }}
    >
      <GameEngine
        style={{ backgroundColor: courtColor }}
        systems={[CreateDisc, MoveDisc]}
        entities={{
          physics: { engine: engine, world: world },
          court: { body: court, renderer: CourtComponent },
          disc_0: { body: disc, renderer: Disc },
        }}
      />
      {showWatermark && <Watermark />}
      {showWatermark &&
        (gameDetails["frame"] ||
          gameDetails["shot"] ||
          gameDetails["leftScore"] ||
          gameDetails["rightScore"]) && (
          <GameDetailsContainer backgroundColor={board}>
            {Object.keys(gameDetails).map(
              (detail, i) =>
                gameDetails[`${detail}`] && (
                  <DetailContainer
                    backgroundColor={lighten(0.05, board)}
                    key={i}
                  >
                    <Detail>{gameDetails[`${detail}`]}</Detail>
                  </DetailContainer>
                )
            )}
          </GameDetailsContainer>
        )}
    </ViewShot>
  );
});

export default Court;

const GameDetailsContainer = styled.View`
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 4px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const DetailContainer = styled.View`
  flex: 1;
  border-radius: 4px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  box-shadow: rgba(0, 0, 0, 0.14) 0px 2px 2px;
  padding: 4px 0;
  margin: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Detail = styled.Text`
  font-size: 16px;
`;
