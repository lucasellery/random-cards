import { Container } from "./styles";
import { useEffect, useState } from "react";
import { Card, CardProps } from "../Card";

export function Cards() {
  const [cards, setCards] = useState([]);
  
  function handleGetCards() {
    const data = fetch('https://api.disneyapi.dev/characters')
      .then(response => response.json())
      .then(response => {
        setCards(response?.data);
        console.log(response);
      })
      .catch(error => console.error(error));
    
    return data;
  }

  // console.log(cards)

  useEffect(() => {
    handleGetCards();
  }, []);

  return (
    <Container>
      {Array.isArray(cards) && cards?.map((card: CardProps) => (
        <Card
          _id={card._id}
          name={card.name}
          imageUrl={card.imageUrl}
        />
      ))}
    </Container>
  ) 
}
