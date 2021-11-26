import styled from '@emotion/styled';
import { ReactNode } from 'react';

interface IButtonProps {
  backgroundColor: string;
}

interface StyledEmotionButtonProps {
  color?: string;
  children: ReactNode;
}

const StyledButton = styled.button<IButtonProps>`
  padding: 32px;
  background-color: ${(props) => props.backgroundColor};
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

const StyledEmotionButton = ({color, children}: StyledEmotionButtonProps): JSX.Element => {
  return (
    <StyledButton backgroundColor={color}>{children}</StyledButton>
  );
};

export default StyledEmotionButton;
