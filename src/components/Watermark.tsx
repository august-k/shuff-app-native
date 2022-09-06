import styled from "styled-components/native";
import Heart from "../primitives/Heart";

const Watermark: React.FC = () => (
  <Container>
    <Text>https://shuff.app</Text>
    <Text>
      <Heart color="tomato" size={9} /> by Adam Fratino
    </Text>
  </Container>
);

export default Watermark;

const Container = styled.View`
  position: absolute;
  bottom: 0;
  padding: 4px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
const Text = styled.Text`
  font-size: 9px;
  letter-spacing: 1px;
  text-transform: uppercase;
`;
