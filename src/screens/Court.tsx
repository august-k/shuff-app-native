import Ionicons from "@expo/vector-icons/Ionicons";
import styled from "styled-components/native";
import { Court as CourtComponent } from "../components";

const Court = ({ navigation, theme }) => {
  const { board, border, court, biscuitColorLeft, biscuitColorRight } = theme;

  return (
    <AppContainer backgroundColor={court}>
      <CourtContainer>
        <CourtComponent
          fill={board}
          stroke={border}
          biscuitColorLeft={biscuitColorLeft}
          biscuitColorRight={biscuitColorRight}
        />
      </CourtContainer>
      <NavContainer>
        <NavIcon
          name="menu-sharp"
          size={32}
          color={border}
          backgroundColor={board}
          onPress={() => navigation.openDrawer()}
        />
      </NavContainer>
    </AppContainer>
  );
};

export default Court;

const AppContainer = styled.View`
  padding-top: 64px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CourtContainer = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const NavContainer = styled.View`
  position: absolute;
  bottom: 24px;
  right: 24px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const NavIcon = styled(Ionicons.Button)`
  padding: 12px 6px 12px 16px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;
