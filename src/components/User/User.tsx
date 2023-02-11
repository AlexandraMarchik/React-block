import React, { FC, ReactNode } from "react";
import styles from "../User/User.module.scss";

type UserProps = {
  userName: string;
};

const User: FC<UserProps> = ({ userName }) => {
  return (
    <div className={styles.userBlock}>
      <div className={styles.userLetter}>
        {userName.split(" ").map((word: string) => word[0]).join('')}
      </div>
      <div className={styles.user}>{userName}</div>
    </div>
  );
};

export default User;
