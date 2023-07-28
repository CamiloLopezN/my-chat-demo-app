import alertMessage from "./AlertMessage.module.css";
import Image from "next/image";
import chatBubble from "../assets/chat-bubble.svg";
import { AlertMessages } from "./models/alertMessage.model";
export default function AlertMessage({ alertMessages }: AlertMessages) {
  return (
    <>
      {alertMessages.map(({ id, title, date, description, isChat }) => (
        <div key={id} className={alertMessage.alertMessageContainer}>
          {isChat && (
            <div className={alertMessage.iconContainer}>
              <Image src={chatBubble} alt="icon" width={25} height={25} />
            </div>
          )}

          <div className={alertMessage.textContainer}>
            <div className={alertMessage.titleDateContainer}>
              <p>
                <strong>{title}</strong>
              </p>
              <p className={alertMessage.dateText}>{date}</p>
            </div>
            <div className={alertMessage.descriptionContainer}>
              <p>
                Lorem Ipsum is simply dummy text of <br />
                the printing and typesetting industry.
                
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
