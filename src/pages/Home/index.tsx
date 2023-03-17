import { createContext, useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from '@/components/Button';
import { Title } from '@/components/Title';
import { TextInput } from './TextInput';
import { UserNameContext } from '@/context/UserContext';
import { Container, Content, TitleContainer } from './styles';

export const UserContext = createContext('');

export function Home() {
  const navigate = useNavigate();
  const { userName, setUserName } = useContext(UserNameContext);
  const [name, setName] = useState("");

  function handleChangeName(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    const { value } = event.target;
    setUserName(value);
    setName(value);
  }

  function handleSubmitText(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setUserName(name);
    localStorage.setItem('userName', name);

    navigate("/board");
  }

  return (
    <Container>
      <Content>
        <TitleContainer>
          <Title />
        </TitleContainer>

        <form onSubmit={handleSubmitText}>
          <TextInput
            label="Nome"
            placeholder='Digite seu nome'
            value={name}
            onChange={handleChangeName}
          />

          <Button
            buttonType="submit"
            disabled={!userName || userName.length < 2}
            color='#72FADC'
            onClick={() => {}}
          >
            Ver cartas
          </Button>
        </form>
      </Content>
    </Container>
  );
}
