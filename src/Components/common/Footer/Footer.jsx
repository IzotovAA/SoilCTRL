import Logo from "../Logo/Logo";
import styles from "./Footer.module.scss";
import facebook from "../../../assets/facebook.svg";
import telegram from "../../../assets/telegram.svg";
import twitter from "../../../assets/twitter.svg";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-container"]}>
        <NavLink to="/">
          <Logo type="dark" />
        </NavLink>
        <div className={styles["detail-container"]}>
          <div className={styles["social-media"]}>
            <h4>Социальные сети</h4>
            <hr />
            <div>
              <img src={facebook} alt="icon" />
              <p>Facebook</p>
            </div>
            <div>
              <img src={telegram} alt="icon" />
              <p>Telegram</p>
            </div>
            <div>
              <img src={twitter} alt="icon" />
              <p>Twitter</p>
            </div>
          </div>
          <div className={styles.basic}>
            <h4>Основное</h4>
            <hr />
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? styles.ftactive : "")}
            >
              О нас
            </NavLink>
            <p>Новости</p>
            <p>Контакты</p>
          </div>
          <div className={styles.subscription}>
            <h4>Подписаться на обновления</h4>
            <hr />
            <div>
              <Input className={styles.input} placeholder="Your email" />
              <Button className={styles.button} onClick={() => {}}>
                Подписаться
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
