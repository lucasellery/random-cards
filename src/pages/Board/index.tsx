import { Button } from '../../components/Button';
import { Cards } from './Cards';
import { HeaderBoard } from './HeaderBoard';
import { ButtonsContainer, Container } from './styles';

export function Board() {
  return (
    <Container>
      <HeaderBoard />
      <ButtonsContainer>
        <Button buttonType='button' color='#ffffff'>Emabaralhar</Button>
        <Button buttonType='button' color='#72FADC'>Puxar nova carta</Button>
      </ButtonsContainer>
      <Cards />
    </Container>
  )
}
