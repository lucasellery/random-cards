import { CSSProperties } from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps {
  children: React.ReactNode;
  buttonType: "button" | "submit" | "reset";
  disabled?: boolean;
  color?: string;
  fontColor?: string;
  width?: string;
  onClick: () => void;
}

export function Button({
  buttonType,
  children,
  disabled,
  color,
  fontColor,
  width,
  onClick,
}: ButtonProps) {
  return (
    <ButtonContainer
      type={buttonType}
      disabled={disabled}
      color={color}
      onClick={onClick}
      fontColor={fontColor}
      width={width as string}
    >
      <p>{children}</p>
    </ButtonContainer>
  );
}
