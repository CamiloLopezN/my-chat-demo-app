import { UserActions } from "../header/models";
import UserActionsStyles from "./UserActions.module.css";
import Image from "next/image";

export default function UserActions({ userActions }: UserActions) {
  return (
    <>
      {userActions.map(({ pathIcon, nameAction, onClickFunction }) => (
        <a key={nameAction} onClick={onClickFunction} className={UserActionsStyles.userAction}>
          <Image 
            src={pathIcon}
            alt="logo"
            width={20}
            height={20}
          />
        </a>
      ))}
    </>
  );
}
