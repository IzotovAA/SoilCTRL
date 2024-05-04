import { NavLink } from "react-router-dom";
import styles from "./Card.module.scss";

export default function Card({ img, title, text, onClick }) {
  return (
    <div className={styles.card} onClick={onClick}>
      <img src={img} alt="pic" />

      <div>
        {/* <NavLink to="/"> */}
        <h4>{title}</h4>
        {/* </NavLink> */}
        <p>{text}</p>
      </div>

      <hr className={styles.hrmobile} />
    </div>
  );
}

// поправить навлинк когда разберусь откуда брать новости
