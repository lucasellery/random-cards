import { CardContainer, CardHeader, Footer, Logo, Main, Points } from "./styles";

export interface CardProps {
  name: string;
  description?: string;
  imageUrl: string;
  _id: number;
}

export function Card({ name, imageUrl, description, _id}: CardProps) {
  return (
    <CardContainer key={_id}>
      <CardHeader>
        <Logo>
          <b>R</b>
          <span>C</span>
        </Logo>
        <Points>
          10
        </Points>
      </CardHeader>
      <Main>
        <img
          src={imageUrl}
          alt=""
          width='auto'
        />
      </Main>
      <Footer>
        <span>{name}</span>
        <span>Escreverei uma descrição aqui</span>
      </Footer>
    </CardContainer>
  )
}