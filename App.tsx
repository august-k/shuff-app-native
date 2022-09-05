import { AppProvider } from "./AppContext";
import Home from "./src/screens/Home";

const App: React.FC = () => (
  <AppProvider>
    <Home />
  </AppProvider>
);

export default App;
