import styled, { CSSProperties } from "styled-components/native";

type Props = {
  backgroundColor: CSSProperties["backgroundColor"];
};

const DropdownLinksContainer: React.FC<Props> = ({
  backgroundColor,
  children,
}) => (
  <StyledDropdownLinksContainer backgroundColor={backgroundColor}>
    {children}
  </StyledDropdownLinksContainer>
);

export default DropdownLinksContainer;

const StyledDropdownLinksContainer = styled.View`
  transform: translateY(-5px);
  position: relative;
  border-radius: 5px;
  padding: 18px 8px 8px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  z-index: 1;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px;
`;
