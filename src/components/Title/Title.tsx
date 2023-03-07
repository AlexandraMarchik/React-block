import React, { FC, ReactNode } from "react";
import styles from "../Title/Title.module.scss";
import { Theme, useThemeContext } from "../../context/Theme/Context";
import classNames from "classnames";

type TitleProps = {
  title: string;
};

const Title: FC<TitleProps> = ({ title }) => {
  const { theme } = useThemeContext();
  return (
    <h1
      className={classNames(styles.title, {
        [styles.darkTittle]: theme === Theme.Dark,
      })}
    >
      {title}
    </h1>
  );
};

export default Title;
