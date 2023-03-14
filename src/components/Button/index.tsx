import { ButtonContainer } from "./styles";

interface ButtonProps {
  children: React.ReactNode;
  buttonType: "button" | "submit" | "reset";
  disabled?: boolean;
  color?: string;
  onClick?: () => void;
}

export function Button({ buttonType, children, disabled, color, onClick }: ButtonProps) {
  return (
    <ButtonContainer
      type={buttonType}
      disabled={disabled}
      color={color}
      onClick={onClick}
    >
      {children}
    </ButtonContainer>
  )
}