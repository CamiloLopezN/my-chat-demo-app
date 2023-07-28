import Image from "next/image";
import cardStyles from "./Card.module.css";
import { Cards } from "./models";

export default function Card({ cards }: Cards) {
  return (
    <>
    {cards.map(({ id, cardTitle, valueCard, estimationCard }) => (
     <div key={id} className={cardStyles.card}>
        <p>{cardTitle}</p>
        <p>{valueCard}</p>
        <p>{estimationCard}</p>
     </div>
    ))}
    </>
  );
}
