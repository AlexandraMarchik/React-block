import React, { useState } from "react";
import styles from "./BurgerButton.module.scss";
import Button from "../Button";
import { ButtonType } from "../Button/Button";
import {CloseIcon, OpenedMenu } from "../../assets/icons";

enum ButtonState {
  Opened,
  Closed,
}

const MenuBurger = () => {
  const [activeButton, setActiveBtn] = useState(ButtonState.Opened);
  const onButtonClick = () => {
    return ButtonState.Opened === activeButton
      ? setActiveBtn(ButtonState.Closed)
      : setActiveBtn(ButtonState.Opened);
  };
  return (
    <Button
      className={styles.btn}
      type={ButtonType.Primary}
      title={
        (activeButton === ButtonState.Opened ? <OpenedMenu/>:<CloseIcon />)
      }
      onClick={onButtonClick}
    />
  );
};

export default MenuBurger;
