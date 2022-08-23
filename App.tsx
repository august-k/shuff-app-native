import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TailwindProvider } from "tailwindcss-react-native";
import { Sidebar } from "./src/components";
import { Court } from "./src/screens";
import * as themes from "./src/themes";
import AppContext from "./AppContext";

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
              screenOptions={{ headerShown: false, drawerPosition: "right" }}
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
