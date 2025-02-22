import styled from "styled-components";
import { Card as CardInterface } from "../interfaces/Card";

interface CardsProps {
  data: CardInterface[];
}

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  padding: 1rem;
`;

const CardItem = styled.div`
  border: 2px solid #333;
  border-radius: 8px;
  text-align: center;
  padding: 0.5rem;
`;

const CardImage = styled.img`
  width: 100%;
  border-bottom: 1px solid #333;
  margin-bottom: 0.5rem;
`;

const CardInfo = styled.p`
  margin: 0.2rem 0;
  font-size: 0.9rem;
`;

export default function Cards({ data }: CardsProps) {
  return (
    <CardsContainer>
      {data.map((card) => (
        <CardItem key={card.code}>
          <CardImage src={card.image} alt={`${card.value} of ${card.suit}`} />
          <CardInfo><strong>Value:</strong> {card.value}</CardInfo>
          <CardInfo><strong>Suit:</strong> {card.suit}</CardInfo>
          <CardInfo><strong>Code:</strong> {card.code}</CardInfo>
        </CardItem>
      ))}
    </CardsContainer>
  );
}