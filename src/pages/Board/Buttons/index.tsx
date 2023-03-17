
import { ButtonsContainer } from './styles';
import { Button } from '@/components/Button';

interface ButtonsContainerProps{
  onShuffleCards: () => void;
  onGetNewCards: () => void;
  newCardsCounter: number;
}

export function Buttons({ onShuffleCards, onGetNewCards, newCardsCounter }: ButtonsContainerProps) {
  return (
    <ButtonsContainer>
      <Button
        buttonType='button'
        color='#ffffff'
        fontColor='#333'
        onClick={onShuffleCards}
        width="100%"
      >
        Embaralhar
      </Button>
      <Button
        buttonType='button'
        color='#72FADC'
        fontColor='#333'
        onClick={onGetNewCards}
        width="100%"
        disabled={newCardsCounter >=3}
      >
        Puxar nova carta
      </Button>
    </ButtonsContainer>
  )
}
