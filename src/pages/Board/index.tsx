import { useContext } from 'react';
import { UserNameContext, UserNameProvider } from '../../context/UserContext';
import { HeaderBoard } from './HeaderBoard';
import { Container } from './styles';

export function Board() {
  const { userName, setUserName } = useContext(UserNameContext);

  return (
    <UserNameProvider>
      <Container>
        <HeaderBoard />
      </Container>
    </UserNameProvider>
  )
}
