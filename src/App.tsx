import Cards from "./components/Cards";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Card } from "./interfaces/Card";

const ParentDiv = styled.div`
  width: 60%;
  margin: auto;
  border: 5px black solid;
`;

export default function App() {
  const [data, setData] = useState<Card[]>([]);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const rawData = await fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=10");
      const { cards }: { cards: Card[] } = await rawData.json();
      setData(cards);
    }
    fetchData()
      .then(() => console.log("Data fetched successfully"))
      .catch((e: Error) => console.log("There was the error: " + e));
  }, [data.length]);

  return (
    <ParentDiv>
      <Cards data={data} />
    </ParentDiv>
  );
}