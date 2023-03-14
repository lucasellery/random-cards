import { Card, CardProps } from "../Card";
import { Container, LoadingContainer } from "./styles";
import { getRandomPoint } from "../../../utils/shuffle";
import { CardResponse, CardType } from "../../../types/Card";
import { animated } from '@react-spring/web';
import { useEffect } from "react";
import { ThreeCircles } from "react-loader-spinner";

interface CardsProps {
  cards: CardResponse | null;
  randomCards: CardResponse["data"]["results"];
  transitions: any;
  shuffledCards: number[];
}

export function Cards({ cards, randomCards, transitions, shuffledCards }: CardsProps) {
  if (!cards ) {
    return (
      <LoadingContainer>
        <ThreeCircles
          height="100"
          width="100"
          color="rgb(114, 250, 220)"
          visible={true}
          ariaLabel="three-circles-rotating"
          wrapperClass="spinner"
          wrapperStyle={{ display: 'flex', justifyContent: 'center', alignItems: 'center'  }}
        />
      </LoadingContainer>
    );
  }

  return (
    <Container>
      {randomCards?.map((card) => (
        <Card
          id={card?.id as number}
          points={getRandomPoint()}
          name={card?.title as string}
          image={`${card?.thumbnail.path}.${card?.thumbnail.extension}`}
          description={card?.description}
        />
      ))}
    </Container>
  )
}
