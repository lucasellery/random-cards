import { Card } from "../Card";
import { ThreeCircles } from "react-loader-spinner";
import { Container, LoadingContainer } from "./styles";
import { CardResponse, CardType } from "@/types/Card";
import { useSpring, animated } from '@react-spring/web';

interface CardsProps {
  cards: CardResponse | null;
  randomCards: CardResponse["data"]["results"];
}

export function Cards({ cards, randomCards }: CardsProps) {
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

  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return (
    <animated.div style={fade}>
      <Container>
        {randomCards!?.map(( card: CardType) => (
          <Card
            key={card.id}
            id={card?.id as number}
            points={card.points}
            name={card?.title as string}
            image={`${card?.thumbnail.path}.${card?.thumbnail.extension}`}
            description={card?.description}
          />
        ))}
      </Container>
    </animated.div>
  )
}
