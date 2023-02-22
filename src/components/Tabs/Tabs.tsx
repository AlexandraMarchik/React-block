import React, { useState } from "react";
import styles from "./Tabs.module.scss";
import classNames from "classnames";

enum TabsNames {
  ALL,
  FAVORITES,
  POPULAR,
}

const TABS_LIST = [
  {
    title: "All",
    disabled: false,
    key: TabsNames.ALL,
  },
  {
    title: "My favorites",
    disabled: true,
    key: TabsNames.FAVORITES,
  },
  {
    title: "Popular",
    disabled: false,
    key: TabsNames.POPULAR,
  },
];
const Tabs = () => {
  const [activeTab, setActiveTab] = useState(TabsNames.ALL);
  const onTabClick=(key:TabsNames)=> ()=> setActiveTab(key)
  return (
    <div className={styles.container}>
      {TABS_LIST.map((tab) => {
        return (
          <div
            key={tab.key}
            className={classNames(styles.tab, {
              [styles.activeTab]: activeTab === tab.key,
              [styles.disabled]: tab.disabled,
            })}
            onClick={tab.disabled ? undefined: onTabClick(tab.key)}
          >
            {tab.title}
          </div>
        );
      })}
    </div>
  );
};
export default Tabs;
