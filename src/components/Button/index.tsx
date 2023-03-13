import { ButtonContainer } from "./styles";

interface ButtonProps {
  children: React.ReactNode;
  buttonType: "button" | "submit" | "reset";
  disabled?: boolean;
  color?: string;
}

export function Button({ buttonType, children, disabled, color  }: ButtonProps) {
  return (
    <ButtonContainer
      type={buttonType}
      disabled={disabled}
      color={color}
    >
      {children}
    </ButtonContainer>
  )
}