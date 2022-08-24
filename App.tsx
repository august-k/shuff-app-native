import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { Dimensions } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TailwindProvider } from "tailwindcss-react-native";
import { Sidebar } from "./src/components";
import { Court } from "./src/screens";
import * as themes from "./src/themes";
import AppContext from "./AppContext";
import { rgba } from "polished";

const { width } = Dimensions.get("screen");
const Drawer = createDrawerNavigator();

const App = () => {
  const [activeTheme, setActiveTheme] = useState(themes.blue);
  const themeSettings = {
    activeTheme: activeTheme,
    setActiveTheme,
  };

  const SidebarScreen = (props) => <Sidebar theme={activeTheme} {...props} />;
  const CourtScreen = (props) => <Court theme={activeTheme} {...props} />;

  return (
    <AppContext.Provider value={themeSettings}>
      <SafeAreaProvider>
        <NavigationContainer>
          <TailwindProvider>
            <Drawer.Navigator
              initialRouteName="Home"
              screenOptions={{
                overlayColor: rgba(activeTheme.border, 0.95),
                headerShown: false,
                drawerPosition: "right",
                drawerStyle: { width: width * 0.9 },
              }}
              drawerContent={SidebarScreen}
            >
              <Drawer.Screen name="Home" component={CourtScreen} />
            </Drawer.Navigator>
          </TailwindProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    </AppContext.Provider>
  );
};

export default App;
