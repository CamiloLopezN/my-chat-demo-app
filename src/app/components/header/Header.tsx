import { Routes, UserAction } from "./models";
import Image from "next/image";
import Navigator from "./navigator/Navigator";
import headerStyles from "./Header.module.css";
import logoApp from "./assets/identifier.png";
import iconHelp from "./assets/icon-help.png";
import iconLogout from "./assets/icon-logout.png";
import iconNotification from "./assets/icon-notification.svg";
import UserActions from "../user-actions/UserActions";

export default function Header() {
  const helpAction: UserAction = {
    pathIcon: iconHelp,
    nameAction: "Help",
  };
  const logoutAction: UserAction = {
    pathIcon: iconLogout,
    nameAction: "Logout",
  };
  const notificationAction: UserAction = {
    pathIcon: iconNotification,
    nameAction: "Notification",
  };

  return (
    <header className={headerStyles.headerContainer}>
      <div className={headerStyles.logoContainer}>
        <Image src={logoApp} alt="logo" width={170} height={50} />
      </div>
      <div className={headerStyles.navigatorContainer}>
        <div className={headerStyles.linksContainer}>
          <Navigator routes={[Routes.home, Routes.Dashboard]} />
        </div>
        <div className={headerStyles.welcomeContainer}>
          <h1 className={headerStyles.welcomeText}>
            Welcome back, <strong>Juan</strong>
          </h1>
        </div>
      </div>
      <div className={headerStyles.userActionsContainer}>
        <UserActions
          userActions={[helpAction, logoutAction, notificationAction]}
        />
      </div>
    </header>
  );
}
