import { CardContainer, CardHeader, Footer, Logo, Main, Points } from "./styles";

export interface CardProps {
  id: number;
  points: number;
  name: string;
  image?: string;
  description?: string;
}

export function Card({ name, image, description, id, points }: CardProps) {
  return (
    <CardContainer key={id}>
      <CardHeader>
        <Logo>
          <b>R</b>
          <span>C</span>
        </Logo>
        <Points>
          {points}
        </Points>
      </CardHeader>
      <Main>
        <img
          src={image}
          alt="Comic card"
          width='auto'
          height={350}
        />
      </Main>
      <Footer>
        <span>{name}</span>
        <span>{description}</span>
      </Footer>
    </CardContainer>
  )
}