import { useEffect, useState } from 'react';
import { useTransition, animated } from '@react-spring/web';
import CryptoJS from "crypto-js";
import { Button } from '../../components/Button';
import { CardResponse } from '../../types/Card';
import { Cards } from './Cards';
import { HeaderBoard } from './HeaderBoard';
import { ButtonsContainer, Container } from './styles';
import { api } from '../../utils/api';
import { getRandomPoint, shuffleArray } from '../../utils/shuffle';

export function Board() {
  const [cards, setCards] = useState<CardResponse | null>(null);
  const [randomCards, setRandomCards] = useState<CardResponse["data"]["results"]>([]);
  const [shuffledCards, setShuffledCards] = useState<number[]>(() => {
    const storedCards = localStorage.getItem('shuffledCards');
    return storedCards ? JSON.parse(storedCards) : [];
  });

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

  function handleRandomCards() {
    if (cards) {
      const randomCards = shuffleArray(cards!.data.results).slice(0, 5);
      setRandomCards(randomCards);
    }
  }

  const transitions = useTransition(shuffledCards, {
    from: { transform: 'translate3d(0,-40px,0)' },
    enter: { transform: 'translate3d(0,0px,0)' },
    trail: 100,
  });

  useEffect(() => {
    handleGetCards();
  }, []);

  useEffect(() => {
    handleRandomCards();
  }, [cards]);

  function handleSaveShuffledCards() {
    const shuffledCards = shuffleArray(randomCards);
    setRandomCards(shuffledCards);
    setShuffledCards(shuffledCards.map(card => card.id));
    localStorage.setItem('shuffledCards', JSON.stringify(shuffledCards.map(card => card.id)));
  }

  return (
    <Container>
      <HeaderBoard />
      <ButtonsContainer>
        <Button buttonType='button' color='#ffffff' onClick={handleSaveShuffledCards}>Emabaralhar</Button>
        <Button buttonType='button' color='#72FADC'>Puxar nova carta</Button>
      </ButtonsContainer>
      <Cards
        cards={cards}
        randomCards={randomCards}
        transitions={transitions}
        shuffledCards ={shuffledCards}
      />
    </Container>
  )
}
