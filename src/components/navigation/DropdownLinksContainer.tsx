import { lighten } from "polished";
import styled from "styled-components/native";
import { useTheme } from "../../../AppContext";

const DropdownLinksContainer: React.FC = ({ children }) => {
  const { board } = useTheme();

  return (
    <StyledDropdownLinksContainer backgroundColor={lighten(0.15, board)}>
      {children}
    </StyledDropdownLinksContainer>
  );
};

export default DropdownLinksContainer;

const StyledDropdownLinksContainer = styled.View`
  transform: translateY(-5px);
  position: relative;
  border-radius: 5px;
  padding: 18px 8px 8px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px;
`;
