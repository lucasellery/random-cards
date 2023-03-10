import styled from 'styled-components';

interface ButtonProps {
  disabled?: boolean;
}

export const ButtonContainer = styled.button<ButtonProps>`
  width: 100%;
  border: none;
  height: 46px;
  border-radius: 44px;
  padding: 14px 28px;

  background: ${((disabled) => disabled ? '#ccc' : '#72FADC')};
  background: ${props => (props.disabled ? '#ccc' : '#72FADC')};

  color: #333;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;

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
`;

