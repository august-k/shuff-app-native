import Ionicons from "@expo/vector-icons/Ionicons";
import Matter from "matter-js";
import { Dimensions } from "react-native";
import { GameEngine } from "react-native-game-engine";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { Disc, Court as CourtComponent } from "../components";
import type { CourtProps } from "../components/Court";

/**
 * @see https://brm.io/matter-js/
 * @see https://github.com/bberak/react-native-game-engine
 * @see https://codepen.io/colaru/pen/xxxqPNV
 * @see https://medium.com/@williamyang93/my-journey-with-react-native-game-engine-part-i-starting-the-project-bbebcd2ccf6
 * @see https://medium.com/@williamyang93/my-journey-with-react-native-game-engine-part-ii-adding-touch-and-bounce-b9ae3fac06b9
 */
const Court = ({ navigation, theme }) => {
  const { board, border, court, biscuitColorLeft, biscuitColorRight } = theme;

  const { width, height } = Dimensions.get("screen");
  const discSize = Math.trunc(Math.max(width) / 12);
  const initialDisc = Matter.Bodies.circle(width / 2, height / 2, discSize);

  return (
    <GameEngine
      style={{ flex: 1, backgroundColor: court }}
      entities={{
        court: {
          fill: board,
          stroke: border,
          biscuitColorLeft: biscuitColorLeft,
          biscuitColorRight: biscuitColorRight,
          renderer: (props) => <CourtBackground {...props} />,
        },
        initialDisc: {
          body: initialDisc,
          size: discSize,
          color: biscuitColorLeft,
          renderer: Disc,
        },
      }}
    >
      <NavContainer>
        <NavIcon
          name="menu-sharp"
          size={24}
          color={border}
          backgroundColor={board}
          onPress={() => navigation.openDrawer()}
        />
      </NavContainer>
    </GameEngine>
  );
};

type CourtBackgroundProps = CourtProps & {
  onLayout: (e: any) => void;
};

const CourtBackground: React.FC<CourtBackgroundProps> = ({
  onLayout,
  ...props
}) => (
  <CourtContainer onLayout={onLayout}>
    <CourtComponent {...props} />
  </CourtContainer>
);

export default Court;

const CourtContainer = styled(SafeAreaView)`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const NavContainer = styled.View`
  position: absolute;
  bottom: 16px;
  right: 16px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const NavIcon = styled(Ionicons.Button)`
  padding: 8px 2px 8px 12px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;
