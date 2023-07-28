import bubbleMessageStyles from "./BubbleMessage.module.css";
import { BubbleMessages } from "../models/bubble-message.model";

export default function BubbleMessage({ bubbleMessages }: BubbleMessages) {
  return (
    <div className={bubbleMessageStyles.bubblesContainer}>
      {bubbleMessages.map(({ id, type, content, isUserSender }) => (
        <div
          key={id}
          className={
            isUserSender
              ? bubbleMessageStyles.bubbleMessageContainerUser
              : bubbleMessageStyles.bubbleMessageContainerIA
          }
        >
          <div className={bubbleMessageStyles.bubbleMessage}>{content}</div>
        </div>
      ))}
    </div>
  );
}
