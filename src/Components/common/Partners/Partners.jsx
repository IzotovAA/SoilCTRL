import styles from "./Partners.module.scss";
import partner1 from "../../../assets/partner1.svg";
import { NavLink } from "react-router-dom";

export default function Partners() {
  return (
    <div className={styles["partners-container"]}>
      <div>
        <h4>Наши партнёры</h4>
        <hr />
      </div>

      <div className={styles.partners}>
        <NavLink to="/">
          <img src={partner1} alt="partner1" /> Партнёр 1
        </NavLink>

        <NavLink to="/">
          <img src={partner1} alt="partner2" /> Партнёр 2
        </NavLink>

        <NavLink to="/">
          <img src={partner1} alt="partner3" /> Партнёр 3
        </NavLink>

        <NavLink to="/">
          <img src={partner1} alt="partner4" /> Партнёр 4
        </NavLink>

        <NavLink to="/">
          <img src={partner1} alt="partner5" /> Партнёр 5
        </NavLink>

        <NavLink to="/">
          <img src={partner1} alt="partner6" /> Партнёр 6
        </NavLink>
      </div>
    </div>
  );
}
