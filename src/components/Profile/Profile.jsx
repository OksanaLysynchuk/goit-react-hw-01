import React from "react";
import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  const { followers, views, likes } = stats;

  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <img src={image} alt="User avatar" />
        <h2>{name}</h2>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
