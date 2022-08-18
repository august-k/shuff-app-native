import styled from "styled-components/native";
import { Court } from "./src/components";
// import tw from "twrnc";
import { TailwindProvider } from "tailwindcss-react-native";
import { Dimensions } from "react-native";
import * as themes from "./src/themes";

const width = Dimensions.get("window").width;
const { board, court, border } = themes.blue;

const App = () => (
  <TailwindProvider>
    <StyledView>
      <Court fill={board} stroke={border} />
      {/* <Text style={tw`text-sky-900`}>Width: {width}</Text> */}
    </StyledView>
  </TailwindProvider>
);

export default App;

const StyledView = styled.View`
  padding-top: 24px;
  background-color: ${court};
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
