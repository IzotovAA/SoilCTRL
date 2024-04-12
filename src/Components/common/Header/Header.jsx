import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <NavLink to="/">
          <Logo type="light" />
        </NavLink>
        <div className={styles["header-menu-container"]}>
          <ul className={styles["header-menu"]}>
            <li className={styles["header-menu--item"]}>
              <NavLink to="/">Главная</NavLink>
            </li>
            <li className={styles["header-menu--item"]}>
              <NavLink to="/about">Компания</NavLink>
            </li>
            <li className={styles["header-menu--item"]}>
              <NavLink to="/directions">Направления</NavLink>
            </li>
          </ul>
          <Button className={styles["header-button"]} onClick={() => {}}>
            Связаться
          </Button>
        </div>
      </header>
    </>
  );
}
