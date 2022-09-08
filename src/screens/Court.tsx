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
import Watermark from "../components/screenshot/Watermark";
import GameDetails from "../components/screenshot/GameDetails";
import { Physics, CreateDisc, MoveDisc } from "../systems";

/**
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
        systems={[Physics, CreateDisc, MoveDisc]}
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
          gameDetails["rightScore"]) && <GameDetails />}
    </ViewShot>
  );
});

export default Court;
