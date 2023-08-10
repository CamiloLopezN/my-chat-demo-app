import AlertMessaging from "./components/alert-message/AlertMessage";
import Card from "./components/card/Card";
import ChatHistory from "./components/chat-history/ChatHistory";
import Chat from "./components/chat/Chat";
import NotificationHistory from "./components/notification-history/NotificationHistory";
import pageStyles from "./page.module.css";
export default function Home() {
  const cards = [
    {
      id: 1,
      cardTitle: "Montly Amount",
      valueCard: "$2194.20",
      estimationCard: "30% last month",
    },
    {
      id: 2,
      cardTitle: "Year Amount",
      valueCard: "$2194.20",
      estimationCard: "30% last month",
    },
    {
      id: 3,
      cardTitle: "Montly Amount",
      valueCard: "$2194.20",
      estimationCard: "30% last month",
    },
    {
      id: 4,
      cardTitle: "Year Amount",
      valueCard: "$2194.20",
      estimationCard: "30% last month",
    },
    {
      id: 5,
      cardTitle: "Year Amount",
      valueCard: "$2194.20",
      estimationCard: "30% last month",
    },
  ];

  return (
    <main className={pageStyles.main}>
      <div className={pageStyles.cardContainer}>
        <Card cards={cards} />
      </div>
      <div className={pageStyles.homeContainer}>
        {/* <div className={pageStyles.chatHistoryContainer}>
          <ChatHistory />
        </div> */}
        <div className={pageStyles.chatContainer}>
          <Chat />
        </div>
        {/* <div className={pageStyles.notificationHistoryContainer}>
          <NotificationHistory />
        </div> */}
      </div>
    </main>
  );
}
