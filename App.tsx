import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { Dimensions } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
// import { TailwindProvider } from "tailwindcss-react-native";
import { Sidebar } from "./src/components";
import { Court } from "./src/screens";
import * as themes from "./src/themes";
import { AppProvider } from "./AppContext";
import { rgba } from "polished";

const { width } = Dimensions.get("screen");
const Drawer = createDrawerNavigator();

const App = () => {
  /** @todo need the overlay to be dynamic, remove this dep */
  const [activeTheme, setActiveTheme] = useState(themes.blue);

  return (
    <AppProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          {/* <TailwindProvider> */}
          <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{
              // overlayColor: rgba(activeTheme.border, 0.95),
              headerShown: false,
              drawerPosition: "right",
              drawerStyle: { width: width * 0.9 },
            }}
            drawerContent={() => <Sidebar />}
          >
            <Drawer.Screen name="Home" component={Court} />
          </Drawer.Navigator>
          {/* </TailwindProvider> */}
        </NavigationContainer>
      </SafeAreaProvider>
    </AppProvider>
  );
};

export default App;
