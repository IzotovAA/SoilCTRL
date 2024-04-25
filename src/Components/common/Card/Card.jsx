import { NavLink } from "react-router-dom";
import styles from "./Card.module.scss";

export default function Card({ img, title, text }) {
  return (
    <div className={styles.card}>
      <img src={img} alt="pic" />
      <NavLink to="/">
        <h4>{title}</h4>
      </NavLink>
      <p>{text}</p>
    </div>
  );
}

// поправить навлинк когда разберусь откуда брать новости
