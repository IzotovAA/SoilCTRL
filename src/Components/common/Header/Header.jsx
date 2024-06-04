import { useContext } from "react";
import Button from "../Button/Button";
import FeedbackForm from "../FeedbackForm/FeedbackForm";
import Logo from "../Logo/Logo";
import Popup from "../Popup/Popup";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import { FormContext } from "../../../utils/Context";

export default function Header() {
  const { open, handleOpen, handleClose, submitForm } = useContext(FormContext);

  return (
    <>
      <header className={styles.header}>
        <NavLink to="/">
          <Logo type="light" className={styles["logo--light"]} />
        </NavLink>
        <div className={styles["header-menu-container"]}>
          <nav>
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
              <li className={styles["header-menu--item"]}>
                <NavLink to="/news">Новости</NavLink>
              </li>
            </ul>
          </nav>

          <Button className={styles["header-button"]} onClick={handleOpen}>
            Связаться
          </Button>
          <Popup />

          <FeedbackForm
            open={open}
            onClose={handleClose}
            submitForm={submitForm}
          />
        </div>
      </header>
    </>
  );
}
