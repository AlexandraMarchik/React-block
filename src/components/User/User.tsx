import React, { FC, ReactNode } from "react";
import styles from "../User/User.module.scss";
import MenuBurger from "../MenuBurger";

type UserProps = {
  userName: string;
};

const User: FC<UserProps> = ({ userName }) => {
  return (
    <div className={styles.userBlock}>
        <MenuBurger/>

      <div className={styles.user}>
          <div className={styles.userLetter}>
              {userName.split(" ").map((word: string) => word[0]).join('')}
          </div> {userName}</div>
    </div>
  );
};

export default User;
