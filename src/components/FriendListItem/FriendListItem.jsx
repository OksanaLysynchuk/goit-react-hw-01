import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusText = isOnline ? "Online" : "Offline";
  const statusClass = isOnline ? styles.online : styles.offline;

  return (
    <div className={styles.ul}>
      <div className={styles.item}>
        <img src={avatar} alt="Avatar" width="48" />
        <p className={styles.text}>{name}</p>
        <p className={statusClass}>{statusText}</p>
      </div>
    </div>
  );
};

export default FriendListItem;
