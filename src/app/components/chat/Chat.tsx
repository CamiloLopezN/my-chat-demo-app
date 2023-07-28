import Image from "next/image";
import chatStyles from "./Chat.module.css";
import chatBubble from "../assets/chat-bubble.svg";
import UserActions from "../user-actions/UserActions";
import { UserAction } from "../header/models";
import iconEditFile from "./assets/edit-file.svg";
import iconMoreHorizontal from "./assets/more-horizontal.svg";
import iconShare from "./assets/share.svg";
import BubbleMessage from "./bubble-message/BubbleMessage";

export default function Chat() {
  const editAction: UserAction = {
    pathIcon: iconEditFile,
    nameAction: "EditFile",
  };
  const moreAction: UserAction = {
    pathIcon: iconMoreHorizontal,
    nameAction: "MoreHorizontal",
  };
  const shareAction: UserAction = {
    pathIcon: iconShare,
    nameAction: "Share",
  };

  const bubbleMessages = [
    {
      id: 1,
      type: "user",
      content: "¿Que es un hook en react?",
      isUserSender: true,
    },
    {
      id: 2,
      type: "ia",
      content: "En React, un hook es una función especial que te permite utilizar",
      isUserSender: false,
    },
    {
      id: 3,
      type: "user",
      content: "¿Quien los creo?",
      isUserSender: true,
    },
    {
      id: 4,
      type: "user",
      content: "¿Quien los creo?",
      isUserSender: false,
    },
  ];

  return (
    <>
      <div className={chatStyles.chatContainer}>
        <header className={chatStyles.headerContainer}>
          <div className={chatStyles.tittleContainer}>
            <Image src={chatBubble} alt="icon" width={25} height={25} />
            <span>
              <strong>Lorem ipsum</strong>
            </span>
          </div>
          <div className={chatStyles.userActionsContainer}>
            <UserActions userActions={[shareAction, editAction, moreAction]} />
          </div>
        </header>
        <main>
          <div className={chatStyles.chatContent}>
            <BubbleMessage bubbleMessages={bubbleMessages} />
          </div>
          <div className={chatStyles.chatActionsContainer}>
            <h4>Acciones</h4>
            <h4>Acciones</h4>
          </div>
        </main>
      </div>
    </>
  );
}
