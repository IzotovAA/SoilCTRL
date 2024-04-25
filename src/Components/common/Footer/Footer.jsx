import Logo from "../Logo/Logo";
import styles from "./Footer.module.scss";
import facebook from "../../../assets/facebook.svg";
import telegram from "../../../assets/telegram.svg";
import twitter from "../../../assets/twitter.svg";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";

export default function Footer() {
  function navLinkHandler(isActive) {
    return isActive ? styles.ftactive : "";
  }

  return (
    <>
      {/* 768px и выше */}
      <footer className={styles.footer}>
        <div className={styles["footer-container"]}>
          <NavLink to="/">
            <Logo type="dark" className={styles["logo--dark"]} />
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
              <nav>
                <ul>
                  <li>
                    <NavLink
                      to="/about"
                      className={({ isActive }) => navLinkHandler(isActive)}
                    >
                      О нас
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/news"
                      className={({ isActive }) => navLinkHandler(isActive)}
                    >
                      Новости
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contacts"
                      className={({ isActive }) => navLinkHandler(isActive)}
                    >
                      Контакты
                    </NavLink>
                  </li>
                </ul>
              </nav>
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

      {/* 767px и ниже */}
      <footer className={styles.footermob}>
        <div className={styles["footermob-container"]}>
          <NavLink to="/">
            <Logo type="dark" className={styles["logo--dark"]} />
          </NavLink>

          <div className={styles.subscription}>
            <h4>Подписаться на обновления</h4>
            <hr />

            <Input className={styles.input} placeholder="Your email" />
            <Button className={styles.button} onClick={() => {}}>
              Подписаться
            </Button>
          </div>

          <nav className={styles.basic}>
            <ul>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => navLinkHandler(isActive)}
                >
                  О нас
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/news"
                  className={({ isActive }) => navLinkHandler(isActive)}
                >
                  Новости
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contacts"
                  className={({ isActive }) => navLinkHandler(isActive)}
                >
                  Контакты
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className={styles["social-media"]}>
            <div>
              <img src={facebook} alt="icon" />
            </div>
            <div>
              <img src={telegram} alt="icon" />
            </div>
            <div>
              <img src={twitter} alt="icon" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
