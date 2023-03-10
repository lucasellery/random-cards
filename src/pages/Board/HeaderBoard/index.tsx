import { Title } from "../../../components/Title";
import { Header, UserName } from "./styles";

export function HeaderBoard() {
  const user = localStorage.getItem('userName');

  return (
    <Header>
      <Title />
      <UserName>
        <span>Olá,{' '}</span>
        <span>{user}</span>
      </UserName>
    </Header>
  )
}