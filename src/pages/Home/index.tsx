import { createContext, useContext, useState } from 'react';
import { Button } from '../../components/Button';
import { Title } from '../../components/Title';
import { Container, Content, TitleContainer } from './styles';
import { TextInput } from './TextInput';
import { useNavigate } from "react-router-dom";
import { UserNameContext, UserNameProvider } from '../../context/UserContext';

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

  console.log('name: ', name)
  console.log('userName: ', userName)

  return (
    <UserNameProvider>
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
              disabled={!userName || userName.length < 3}
            >
              Ver cartas
            </Button>
          </form>

        </Content>
      </Container>
    </UserNameProvider>
  );
}