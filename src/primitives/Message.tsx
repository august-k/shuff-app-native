import styled, { css } from "styled-components/native";

const Message: React.FC = ({ children }) => (
  <StyledMessage>{children}</StyledMessage>
);

export default Message;

const StyledMessage = styled.Text`
  font-size: 11px;
  padding: 4px 8px;
  line-height: 15px;
`;
