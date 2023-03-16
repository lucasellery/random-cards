import { useContext } from "react";
import { Title } from "../../../components/Title";
import { UserNameContext } from "../../../context/UserContext";
import { Header, UserName } from "./styles";

export function HeaderBoard() {
  const user = localStorage.getItem('userName');
  const { userName } = useContext(UserNameContext);

  return (
    <Header>
      <Title />
      <UserName>
        <span>Olá,{' '}</span>
        <span>{user || userName}</span>
      </UserName>
    </Header>
  )
}