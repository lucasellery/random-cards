import { useEffect, useState } from 'react';
import { useTransition, animated } from '@react-spring/web';
import 'react-toastify/dist/ReactToastify.css';
import CryptoJS from "crypto-js";
import { Button } from '../../components/Button';
import { CardResponse, CardType } from '../../types/Card';
import { Cards } from './Cards';
import { HeaderBoard } from './HeaderBoard';
import { ButtonsContainer, Container } from './styles';
import { api } from '../../utils/api';
import { getRandomPoint, shuffleArray } from '../../utils/shuffle';
import { toast, ToastContainer } from 'react-toastify';

export function Board() {
  const [cards, setCards] = useState<CardResponse | null>(null);
  const [randomCards, setRandomCards] = useState<CardResponse["data"]["results"]>([]);
  const [shuffledCards, setShuffledCards] = useState<number[]>(() => {
    const storedCards = localStorage.getItem('shuffledCards');
    return storedCards ? JSON.parse(storedCards) : [];
  });
  const [newCardsCounter, setNewCardCounter] = useState(0);

  useEffect(() => {
    handleGetCards();
  }, []);

  useEffect(() => {
    handleRandomCards();
  }, [cards]);

  async function handleGetCards() {
    const publicKey = "51dfc0a36eceadb357f1c62827bcf268";
    const privateKey = "90d0310f152d5cb0dfafcf1feaba857803587706";
    const timestamp = Date.now().toString();
    const hash = CryptoJS.MD5(timestamp + privateKey + publicKey).toString();

    try {
      const response = await api.get(
        `/comics?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
      );

      setCards(response?.data);
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

  const transitions = useTransition(randomCards, {
    from: { transform: 'translate3d(0,-40px,0)' },
    enter: { transform: 'translate3d(0,0px,0)' },
    trail: 100,
  });

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
      if (newCardsCounter >= 3) {
        return;
      }

      const newCard = generateNewCard(randomCards, cards?.data?.results);

      setRandomCards((prevState: any) => [...prevState, newCard]);

      setNewCardCounter((prevState) => prevState + 1);

      if (newCardsCounter >= 2) {
        toast.success(`Parabéns, você alcançou o limite de cartas! 👏`, {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else if (newCardsCounter < 3) {
        toast.info(`Você puxou uma carta! ${Math.abs(newCardsCounter - 2)} cartas restantes.`, {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
  }

  return (
    <>
      <Container>
        <HeaderBoard />
        <ToastContainer />
        <ButtonsContainer>
          <Button
            buttonType='button'
            color='#ffffff'
            onClick={handleSaveShuffledCards}
          >
            Emabaralhar
          </Button>
          <Button
            buttonType='button'
            color='#72FADC'
            onClick={handleGetNewCard}
            disabled={newCardsCounter >=3}
          >
            Puxar nova carta
          </Button>
        </ButtonsContainer>
        <Cards
          cards={cards}
          randomCards={randomCards}
          transitions={transitions}
        />
      </Container>
    </>
  )
}
