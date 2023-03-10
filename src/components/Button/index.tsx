import { ButtonContainer } from "./styles";

interface ButtonProps {
  children: React.ReactNode;
  buttonType: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function Button({ buttonType, children, disabled  }: ButtonProps) {
  return (
    <ButtonContainer type={buttonType} disabled={disabled}>
      {children}
    </ButtonContainer>
  )
}