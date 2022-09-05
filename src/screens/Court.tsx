import Matter from "matter-js";
import { Dimensions } from "react-native";
import { GameEngine } from "react-native-game-engine";
import { useTheme } from "../../AppContext";
import CourtComponent, { CourtBody } from "../components/Court";
import Disc, { DiscBody } from "../components/Disc";
import { Physics, CreateDisc, MoveDisc } from "../systems";

/**
 * @see https://brm.io/matter-js/
 * @see https://github.com/bberak/react-native-game-engine-handbook
 * @see https://codepen.io/colaru/pen/xxxqPNV
 * @see https://github.com/niviso/react-native-pong
 * @see https://pusher.com/tutorials/react-native-pong-game/
 */
const Court = () => {
  const { court: courtTheme } = useTheme();
  const { width, height } = Dimensions.get("screen");

  const engine = Matter.Engine.create({ enableSleeping: false });
  const world = engine.world;
  const court = CourtBody(-width, -height, width, height);
  const disc = DiscBody(width / 2, height / 2);

  engine.world.gravity.y = 0;
  Matter.World.add(world, [disc, court]);

  return (
    <GameEngine
      style={{ flex: 1, backgroundColor: courtTheme }}
      systems={[Physics, CreateDisc, MoveDisc]}
      entities={{
        physics: { engine: engine, world: world },
        court: { body: court, renderer: CourtComponent },
        disc_0: { body: disc, renderer: Disc },
      }}
    />
  );
};

export default Court;
