import Image from "next/image";
import arrowToggle from "../assets/arrow-toggle.svg";
import notificationHistoryStyles from "./NotificationHistory.module.css";
import AlertMessage from "../alert-message/AlertMessage";

const alertMessages = [
  {
    id: 1,
    title: "Monthly Amount",
    date: "Today",
    description: "",
    isChat: false,
  },
  {
    id: 2,
    title: "Monthly Amount",
    date: "Today",
    description: "",
    isChat: false,
  },
  {
    id: 3,
    title: "Monthly Amount",
    date: "Today",
    description: "",
    isChat: false,
  },
];
export default function NotificationHistory() {
  return (
    <>
      <div className={notificationHistoryStyles.notificationContainer}>
        <div className={notificationHistoryStyles.notificationTittleContainer}>
          <span>
            Notificaciones
          </span>
        </div>
        <div className={notificationHistoryStyles.findChatContainer}>
          <input
            className={notificationHistoryStyles.findChatInput}
            title="Buscar chat"
            type="text"
          />
        </div>
        <div className={notificationHistoryStyles.recentConversationsContainer}>
          <Image src={arrowToggle} alt="icon" width={30} height={30} />
          <p>Notificaciones recientes</p>
        </div>
        <AlertMessage alertMessages={alertMessages} />
      </div>
    </>
  );
}
