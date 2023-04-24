import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGroup,
  faUsers,
  faFileLines,
  faCoins,
} from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/CardSection.module.scss";

export default function CardSection() {
  const categories = [
    {
      id: 1,
      text: "USERS",
      icon: faUserGroup,
      color: "#DF18FF",
      number: "2,453",
    },
    {
      id: 2,
      text: "ACTIVE USERS",
      icon: faUsers,
      color: "#5718ff",
      number: "2,453",
    },
    {
      id: 3,
      text: "USERS WITH LOANS",
      icon: faFileLines,
      color: "#f55f44",
      number: "12,453",
    },
    {
      id: 4,
      text: "USERS WITH SAVINGS",
      icon: faCoins,
      color: "#ff3366",
      number: "102,453",
    },
  ];
  return (
    <div className={styles.card}>
      {categories.map((category) => {
        const { id, text, number, color, icon } = category;
        return (
          <div key={id} className={styles.card_single}>
            <div
              className={styles.card_icon}
              style={{
                color: color,
                backgroundColor: `rgba(${parseInt(
                  color.slice(1, 3),
                  16
                )}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(
                  color.slice(5, 7),
                  16
                )}, 0.1)`,
              }} // Set the background color with opacity
            >
              <FontAwesomeIcon icon={icon} />
            </div>
            <div className="card-content">
              <h2 className={styles.card_heading}>{text}</h2>
              <p className={styles.card_paragraph}>{number}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
