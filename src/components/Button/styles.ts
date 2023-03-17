import styled from 'styled-components';

interface ButtonProps {
  disabled?: boolean;
  color?: string;
  fontColor?: string;
  width: string;
}

export const ButtonContainer = styled.button<ButtonProps>`
  width: ${props => props.width};
  border: none;
  height: 46px;
  border-radius: 44px;
  padding: 14px 28px;

  display: flex;
  white-space: wrap;
  justify-content: center;
  align-items: center;

  background: ${props => (props.disabled ? '#ccc' : props.color)};


  p {
    font-size: 1rem;
    font-weight: 600;
    line-height: 100%;
    color: ${props => (props.fontColor)};
  }

  transition: all 0.2s ease-in-out;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

  &:disabled {
    opacity: 0.5;
  }

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    transition: all 0.2s ease-in-out;
    filter: brightness(90%);
    outline: none;
  }

  @media only screen and (max-width: 425px) {
    p {
      white-space: nowrap;
      font-size: 0.8rem;
    }
  }
`;

