import { createContext, useContext, useState } from "react";
import * as themes from "./src/themes";
import type { Theme } from "./src/themes";

/**
 * How to use React Context effectively
 * @see https://kentcdodds.com/blog/how-to-use-react-context-effectively
 * */

type State = { theme: Theme; showWatermark: boolean };
type Dispatch = (action: any) => void;

export const AppContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

const AppProvider = ({ children }) => {
  /** @todo move global state defaults to constants */
  const [state, dispatch] = useState({
    theme: themes.blue,
    showWatermark: false,
  });
  const values = { state, dispatch };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

const useGlobalState = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("useGlobalState must be used within AppProvider");
  }

  return context;
};

const useTheme = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("useGlobalState must be used within AppProvider");
  }

  return context.state.theme;
};

export { AppProvider, useGlobalState, useTheme };
