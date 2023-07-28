import AlertMessage from "../alert-message/AlertMessage";
import chatHistoryStyles from "./ChatHistory.module.css";
import arrowToggle from "../assets/arrow-toggle.svg";
import Image from "next/image";

const alertMessages = [
  {
    id: 1,
    title: "Monthly Amount",
    date: "Today",
    description: "",
    isChat: true,
  },
  {
    id: 2,
    title: "Monthly Amount",
    date: "Today",
    description: "",
    isChat: true,
  },
  {
    id: 3,
    title: "Monthly Amount",
    date: "Today",
    description: "",
    isChat: true,
  },
];

export default function ChatHistory() {
  return (
    <>
      <div className={chatHistoryStyles.chatsContainer}>
        <div className={chatHistoryStyles.chatButtonContainer}>
          <button className={chatHistoryStyles.createNewChatButton}>
            Crear nuevo chat
          </button>
        </div>
        <div className={chatHistoryStyles.findChatContainer}>
          <input
            placeholder="Buscar una conversación"
            className={chatHistoryStyles.findChatInput}
            title="Buscar chat"
            type="text"
          />
        </div>
        <div className={chatHistoryStyles.recentConversationsContainer}>
          <Image src={arrowToggle} alt="icon" width={30} height={30} />
          <p>Conversaciones recientes</p>
        </div>
        <AlertMessage alertMessages={alertMessages} />
      </div>
    </>
  );
}
