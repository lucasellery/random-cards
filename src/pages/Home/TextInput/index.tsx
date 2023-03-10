import { Input, InputContainer, Label } from './styles';

interface TextInputProps {
  label: string;
  placeholder: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function TextInput({ label, placeholder, value, onChange }: TextInputProps) {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <Input
        type='text'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputContainer>
  );
}