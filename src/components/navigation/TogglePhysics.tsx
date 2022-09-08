import { lighten } from "polished";
import React from "react";
import { Button } from "../../primitives";
import { GlobalState, useGlobalState } from "../../../AppContext";

const TogglePhysics: React.FC = () => {
  const { state, dispatch } = useGlobalState();
  const { border, contrastText } = state.theme;

  const togglePhysics = () => {
    dispatch((prev: GlobalState) => ({
      ...prev,
      isPhysicsActive: !state.isPhysicsActive,
    }));
  };

  return (
    <Button
      style={{ marginTop: 16 }}
      backgroundColor={lighten(0.05, border)}
      textColor={contrastText}
      onPress={togglePhysics}
    >
      Toggle Physics
    </Button>
  );
};

export default TogglePhysics;
