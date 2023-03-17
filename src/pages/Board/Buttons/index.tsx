
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
        onClick={onShuffleCards}
      >
        Emabaralhar
      </Button>
      <Button
        buttonType='button'
        color='#72FADC'
        onClick={onGetNewCards}
        disabled={newCardsCounter >=3}
      >
        Puxar nova carta
      </Button>
    </ButtonsContainer>
  )
}
