import { Text } from "react-native";

const Bold: React.FC = ({ children }) => (
  <Text style={{ fontWeight: "bold" }}>{children}</Text>
);

export default Bold;
