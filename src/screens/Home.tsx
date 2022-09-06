import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { rgba } from "polished";
import { useRef } from "react";
import { Dimensions } from "react-native";
import { useTheme } from "../../AppContext";
import { Sidebar } from "../components";
import Court from "./Court";

const { width } = Dimensions.get("screen");
const Drawer = createDrawerNavigator();

const Home: React.FC = () => {
  const { border } = useTheme();
  const courtRef = useRef(null);

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          overlayColor: rgba(border, 0.95),
          headerShown: false,
          drawerPosition: "right",
          drawerStyle: { width: width * 0.9 },
        }}
        drawerContent={() => <Sidebar ref={courtRef} />}
      >
        <Drawer.Screen name="Home" children={() => <Court ref={courtRef} />} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Home;
