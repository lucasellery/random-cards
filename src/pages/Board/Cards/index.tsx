import { useEffect, useState } from "react";
import { api } from '../../../utils/api';
import { AxiosResponse } from 'axios';
import { Card, CardProps } from "../Card";
import { Container } from "./styles";
import CryptoJS from "crypto-js";
import { shuffleArray, getRandomPoint } from "../../../utils/shuffle";

type CardType = {
  id: number;
  title: string;
  description: string;
  thumbnail: {
    extension: string;
    path: string;
  };
}

type CardResponse = {
  data: {
    results: CardType[];
  }
}

const pointsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export function Cards() {
  const [cards, setCards] = useState< CardResponse | null>(null);
  
  async function handleGetCards() {
    const publicKey = "51dfc0a36eceadb357f1c62827bcf268";
    const privateKey = "90d0310f152d5cb0dfafcf1feaba857803587706";
    const timestamp = Date.now().toString();
    const hash = CryptoJS.MD5(timestamp + privateKey + publicKey).toString();

    const response = await api.get(
      `/comics?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
    );
    setCards(response?.data);
  }

  const randomCards = cards?.data?.results.sort(() => 0.5 - Math.random()).slice(0, 5);

  useEffect(() => {
    handleGetCards();
  }, []);

  if (!cards) {
    return <div>Carregando...</div>;
  }

  return (
    <Container>
      {randomCards?.map((card) => (
          <Card
            id={card?.id}
            points={getRandomPoint()}
            name={card?.title}
            image={`${card?.thumbnail.path}.${card?.thumbnail.extension}`}
            description={card?.description}
          />
      ))}
    </Container>
  )
}
