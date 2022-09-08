import { lighten } from "polished";
import styled from "styled-components/native";
import { useTheme } from "../../../AppContext";
import { CONTRAST_TEXT_INVERSE } from "../../utils";

type Props = {
  text: string;
  emoji: string;
  isActive?: boolean;
  onPress?: () => void;
};

const DropdownLink: React.FC<Props> = ({ text, emoji, isActive, onPress }) => {
  const { board, border, contrastText } = useTheme();

  return (
    <LinkContainer
      backgroundColor={isActive ? border : lighten(0.15, board)}
      onPress={onPress}
    >
      <Title
        textColor={
          isActive ? contrastText : CONTRAST_TEXT_INVERSE[contrastText]
        }
      >
        {text}
      </Title>
      {emoji && <Emoji>{emoji}</Emoji>}
    </LinkContainer>
  );
};

export default DropdownLink;

const LinkContainer = styled.Pressable`
  background-color: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  flex-direction: row;
  border-radius: 4px;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.Text`
  color: ${({ textColor }) => textColor};
  padding: 8px 0 8px 8px;
  font-size: 14px;
  font-weight: bold;
`;

const Emoji = styled.Text`
  padding-right: 4px;
`;
