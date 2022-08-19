import styled, { CSSProperties } from "styled-components/native";

type Props = {
  backgroundColor: CSSProperties["backgroundColor"];
};

const ShadowBar: React.FC<Props> = ({ backgroundColor }) => (
  <StyledShadowBar backgroundColor={backgroundColor} />
);

export default ShadowBar;

const StyledShadowBar = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 5px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  box-shadow: rgba(0, 0, 0, 0.44) 0px 5px 5px;
`;
