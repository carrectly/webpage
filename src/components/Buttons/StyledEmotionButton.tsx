import styled from '@emotion/styled';
import { ReactNode } from 'react';

interface IButtonProps {
  backgroundColor: string;
  fontColor: string;
}

interface StyledEmotionButtonProps {
  bgColor: string;
  textColor: string;
  children: ReactNode;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const StyledButton = styled.button<IButtonProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.fontColor};
  font-family: roboto, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 15px;
  text-transform: uppercase;
  border-radius: 10px;
  padding: 4px;
  margin: 5px;
  &:hover {
    color: white;
  }
`;

const StyledEmotionButton = ({
  bgColor,
  textColor,
  children,
  handleClick
}: StyledEmotionButtonProps): JSX.Element => {
  return (
    <StyledButton backgroundColor={bgColor} fontColor={textColor} onClick={handleClick}>
      {children}
    </StyledButton>
  );
};

export default StyledEmotionButton;
