import React from "react";
import styles from "./FriendListItem.module.css";

function FriendListItem({ avatar, name, isOnline }) {
  let statusClass = styles.status;

  if (isOnline) {
    statusClass += " " + styles.online;
  } else {
    statusClass += " " + styles.offline;
  }

  return (
    <li className={styles.item}>
      <span className={statusClass}></span>
      <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

export default FriendListItem;
