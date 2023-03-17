import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CryptoJS from "crypto-js";
import { CardResponse, CardType } from '@/types/Card';
import { Cards } from './Cards';
import { HeaderBoard } from './HeaderBoard';
import { Buttons } from './Buttons';
import { api } from '@/utils/api';
import { getRandomPoint, shuffleArray } from '@/utils/shuffle';
import { infoMessage, sucessMessage } from '@/utils/toasts';
import { Container, ResetContainer } from './styles';
import { Button } from '@/components/Button';

export function Board() {
  const [cards, setCards] = useState<CardResponse | null>(null);
  const [newCardsCounter, setNewCardCounter] = useState(0);
  const [randomCards, setRandomCards] = useState<CardResponse["data"]["results"]>([]);
  const [shuffledCards, setShuffledCards] = useState<number[]>(() => {
    const storedCards = localStorage.getItem('shuffledCards');
    return storedCards ? JSON.parse(storedCards) : [];
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleGetCards();
  }, []);

  useEffect(() => {
    handleRandomCards();
  }, [cards]);

  async function handleGetCards() {
    const publicKey = import.meta.env.VITE_API_PUBLIC_KEY;
    const privateKey = import.meta.env.VITE_API_PRIVATE_KEY;
    const timestamp = Date.now().toString();
    const hash = CryptoJS.MD5(timestamp + privateKey + publicKey).toString();

    try {
      setLoading(true);
      const response = await api.get(
        `/comics?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
      );

      setCards(response?.data);
      setLoading(false);
    } catch (error) {
      console.log('error: ', error);
    }
  }

  function addPointsToCard(card: CardType) {
    const { id, title, description, thumbnail } = card;
    const points = getRandomPoint();

    return { id, title, description, thumbnail, points };
  }

  function handleRandomCards() {
    if (cards) {
      const randomCards = shuffleArray(cards!.data.results).slice(0, 5).map(addPointsToCard);
      setRandomCards(randomCards);
    }
  }

  function handleSaveShuffledCards() {
    const shuffledCards = shuffleArray(randomCards);
    setRandomCards(shuffledCards);
    setShuffledCards(shuffledCards.map(card => card.id));
    localStorage.setItem('shuffledCards', JSON.stringify(shuffledCards.map(card => card.id)));
  }

  function generateNewCard(existingCards: CardResponse["data"]["results"], allCards: CardResponse["data"]["results"]) {
    const newCard = shuffleArray(allCards).find((card) => !existingCards.find((existingCard) => existingCard.id === card.id));

    if (newCard) {
      return addPointsToCard(newCard);
    } else {
      generateNewCard(existingCards, allCards);
    }
  }

  function handleGetNewCard() {
    if (cards) {
      if (newCardsCounter >= 3) return;

      const newCard = generateNewCard(randomCards, cards?.data?.results);

      setRandomCards((prevState: any) => [...prevState, newCard]);
      setNewCardCounter((prevState) => prevState + 1);

      if (newCardsCounter >= 2) {
        sucessMessage();
      } else if (newCardsCounter < 3) {
        infoMessage({ newCardsCounter });
      }
    }
  }

  function handleReset() {
    handleGetCards();
    setNewCardCounter(0);
  }

  return (
    <>
      <Container>
        <HeaderBoard />
        <ToastContainer />
        <Buttons
          onShuffleCards={handleSaveShuffledCards}
          onGetNewCards={handleGetNewCard}
          newCardsCounter={newCardsCounter}
        />
        {newCardsCounter >= 3 && (
          <ResetContainer>
            <Button
              buttonType='button'
              fontColor='white'
              color="transparent"
              onClick={handleReset}
            >
              Reiniciar
            </Button>
          </ResetContainer>
        )}
        <Cards
          cards={cards}
          randomCards={randomCards}
          isLoading={loading}
        />
      </Container>
    </>
  )
}
