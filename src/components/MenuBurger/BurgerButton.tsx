import React, { useState } from "react";
import styles from "./BurgerButton.module.scss";
import Button from "../Button";
import { ButtonType } from "../Button/Button";
import { CloseIcon, OpenedMenu } from "../../assets/icons";

const MenuBurger = () => {
  const [isOpened, setOpened] = useState(false);
  const onButtonClick = () => {
    return setOpened(!isOpened);
  };
  return (
    <Button
      className={styles.btn}
      type={ButtonType.Primary}
      title={!isOpened ? <OpenedMenu /> : <CloseIcon />}
      onClick={onButtonClick}
    />
  );
};

export default MenuBurger;
