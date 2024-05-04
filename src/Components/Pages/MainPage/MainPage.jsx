import Layout from "../../Layout/Layout";
import styles from "./MainPage.module.scss";
import Button from "../../common/Button/Button";
import aboutFundPic from "../../../assets/about-fund-pic.svg";
import aboutFundPicMob from "../../../assets/about-fund-pic-mob.svg";
import partner1 from "../../../assets/partner1.svg";
import { NavLink, useNavigate } from "react-router-dom";
import team from "../../../assets/team.jpg";
import teamMob from "../../../assets/team-mob.jpg";
import principles from "../../../assets/principles-pic.jpg";
import principlesMob from "../../../assets/principles-pic-mob.jpg";
import principlesLogo1 from "../../../assets/principles-logo1.svg";
import principlesLogo2 from "../../../assets/principles-logo2.svg";
import principlesLogo3 from "../../../assets/principles-logo3.svg";
import principlesLogo4 from "../../../assets/principles-logo4.svg";
import directionsPic from "../../../assets/directions-pic.svg";
import directionsPicMob from "../../../assets/directions-pic-mob.svg";
import { newsData } from "../../../services/newsData";
import Card from "../../common/Card/Card";
import { onClickOpenPage, onClickScrollToRef } from "../../../services/onClick";
import { useRef } from "react";
import SectionTitle from "../../common/SectionTitle/SectionTitle";
import Partners from "../../common/Partners/Partners";
import Questions from "../../common/Questions/Questions";
import News from "../../common/News/News";

export default function MainPage() {
  const navigate = useNavigate();
  const aboutFund = useRef(null);

  return (
    <Layout>
      <main>
        <section className={styles["main-screen"]}>
          <div className={styles["main-screen-text"]}>
            <h1>
              SoilCTRL - Благодатная
              <br />
              почва для Ваших
              <br />
              финансов
            </h1>

            <Button
              className={styles.button}
              onClick={() => {
                onClickScrollToRef(aboutFund);
              }}
            >
              Подробнее
            </Button>
          </div>

          <div className={styles["main-screen-info"]}>
            <p>100 000$ &nbsp; размер входа</p>
            <hr />
            <p>Годовая доходность 74%</p>
          </div>

          <div className={styles["main-screen-info-mob"]}>
            <p>Годовая доходность 74%</p>
            <hr />
            <p>100 000$ размер входа</p>
          </div>
        </section>

        <section className={styles["about-fund"]} ref={aboutFund}>
          <div className={styles["about-fund-container"]}>
            <SectionTitle styles={styles} className="about-fund-title">
              О фонде
            </SectionTitle>

            <div className={styles["about-fund-detail-container"]}>
              <div className={styles["about-fund-detail"]}>
                <h1>
                  SOILCTRL - ведущий фонд по управлению
                  <br />
                  активами, с фокусом на инновационных
                  <br />
                  решениях и устойчивом развитии.
                </h1>

                <img
                  src={aboutFundPicMob}
                  alt="7 years"
                  className={styles["img-mob"]}
                />

                <p>
                  Мы стремимся создать принципиально новый подход к
                  инвестиционному управлению, преодолевая границы и осуществляя
                  глубокий анализ капиталов и рыночных возможностей.
                </p>

                <Button
                  className={styles.button}
                  onClick={() => {
                    onClickOpenPage(navigate, "/about");
                  }}
                >
                  Подробнее
                </Button>
              </div>

              <img src={aboutFundPic} alt="7 years" />
            </div>

            <Partners />

            <div className={styles["about-fund-team"]}>
              <div className={styles["about-fund-team-info"]}>
                <h4>НАША КОМАНДА</h4>
                <h2>Как мы собрали 34М</h2>
                <img
                  src={teamMob}
                  alt="team pic"
                  className={styles["team-mob"]}
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat. Aenean faucibus nibh.
                </p>
                <div className={styles["about-fund-team-info-detail"]}>
                  <div>
                    <h3>226M+</h3>
                    <p>
                      Пожертвований
                      <br />
                      получено
                    </p>
                  </div>
                  <div>
                    <h3>54%</h3>
                    <p>Волонтёры</p>
                  </div>
                  <div>
                    <h3>18</h3>
                    <p>Команда</p>
                  </div>
                </div>

                <Button
                  className={styles.button}
                  onClick={() => {
                    onClickOpenPage(navigate, "/about");
                  }}
                >
                  О команде
                </Button>
              </div>

              <img src={team} alt="team pic" />
            </div>
          </div>
        </section>

        <section className={styles.principles}>
          <div className={styles["principles-container"]}>
            <SectionTitle styles={styles} className="principles-title">
              ПРИНЦИПЫ
            </SectionTitle>

            <div className={styles["principles-target"]}>
              <div className={styles["principles-target-detail"]}>
                <h2>Главная задача фонда, это приносить доход клиентам</h2>

                <ul>
                  <li>
                    <img src={principlesLogo1} alt="logo" />
                    <div>
                      <h4>Профессионализм</h4>
                      <p>
                        Наша задача не считывать возможности, а создавать их
                      </p>
                    </div>
                  </li>
                  <li>
                    <img src={principlesLogo2} alt="logo" />
                    <div>
                      <h4>Клиентоориентированность</h4>
                      <p>
                        Полностью фокусируемся на потребностях и целях наших
                        клиентов.
                      </p>
                    </div>
                  </li>
                  <li>
                    <img src={principlesLogo3} alt="logo" />
                    <div>
                      <h4>Активное управление рисками</h4>
                      <p>
                        Мы акцентируем внимание на эффективном управлении
                        рисками.
                      </p>
                    </div>
                  </li>
                  <li>
                    <img src={principlesLogo4} alt="logo" />
                    <div>
                      <h4>Результативность</h4>
                      <p>
                        Мы направляем все свои усилия на достижение высокой
                        результативности в управлении активами
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <img
                src={principles}
                alt="principles pic"
                className={styles["principles-pic"]}
              />
              <img
                src={principlesMob}
                alt="principles pic"
                className={styles["principles-pic-mob"]}
              />
            </div>
          </div>
        </section>

        <section className={styles.directions}>
          <div className={styles["directions-detail"]}>
            <h2>Направления в которых мы работаем</h2>
            <p>
              Мы исследуем и анализируем различные отрасли и области бизнеса,
              чтобы выявить потенциальные возможности для инвестиций и
              диверсификации наших портфелей.
            </p>

            <img
              src={directionsPicMob}
              alt="directions pic"
              className={styles["pic-mob"]}
            />

            <div className={styles["directions-detail-percent"]}>
              <p>55% Фондовый рынок</p>
              <p>35% КриптоАктивы</p>
              <p>10% Другие отрасли</p>
            </div>

            <Button
              className={styles.button}
              onClick={() => {
                onClickOpenPage(navigate, "/directions");
              }}
            >
              Узнать подробнее
            </Button>
          </div>

          <img
            src={directionsPic}
            alt="directions pic"
            className={styles.pic}
          />
        </section>

        <Questions
          styles={styles}
          className="questions"
          classNameBtn="button"
          onClick={() => {}}
        />

        <News renderQty={4} />
      </main>
    </Layout>
  );
}
