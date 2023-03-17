import { useContext } from "react";
import { Title } from "@/components/Title";
import { UserNameContext } from "@/context/UserContext";
import { Header, UserName } from "./styles";
import { useIsMobile } from "@/hooks/useIsMobile";
import { LogoAbbr } from "@/components/LogoAbbr";

export function HeaderBoard() {
  const user = localStorage.getItem('userName');
  const { userName } = useContext(UserNameContext);
  const isMobile = useIsMobile();

  return (
    <Header>
      {isMobile && <LogoAbbr />}
      {!isMobile && <Title />}
      <UserName>
        <span>Olá,{' '}</span>
        <span>{user || userName}</span>
      </UserName>
    </Header>
  )
}
