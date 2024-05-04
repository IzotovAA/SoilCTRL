import Layout from "../../Layout/Layout";
import SectionTitle from "../../common/SectionTitle/SectionTitle";
import styles from "./AboutPage.module.scss";
import aboutPic from "../../../assets/about-pic.jpg";
import aboutPicMob from "../../../assets/about-pic-mob.jpg";
import Partners from "../../common/Partners/Partners";
import icon1 from "../../../assets/about-page-icon1.svg";
import icon2 from "../../../assets/about-page-icon2.svg";
import icon3 from "../../../assets/about-page-icon3.svg";
import icon4 from "../../../assets/about-page-icon4.svg";
import Questions from "../../common/Questions/Questions";
import News from "../../common/News/News";

export default function AboutPage() {
  return (
    <Layout>
      <section className={styles["about-us"]}>
        <div className={styles["about-us-container"]}>
          <SectionTitle styles={styles} className="about-us-title">
            О НАС
          </SectionTitle>

          <div className={styles["about-us-header"]}>
            <h1>Нужная команда, ваш главный соус успеха </h1>
            <div>
              <h4>
                Команда SOILCTRL - профессионалы с опытом в инвестициях и
                риск-менеджменте.
              </h4>
              <p>
                Мы объединяем талантливых аналитиков, стратегов, трейдеров и
                менеджеров в одну сильную команду, готовую предоставить нашим
                клиентам ведущий уровень сервиса и результаты.
              </p>
            </div>
          </div>

          <img
            src={aboutPic}
            alt="about pic"
            className={styles["about-us-img"]}
          />

          <img
            src={aboutPicMob}
            alt="about pic"
            className={styles["about-us-img-mob"]}
          />

          {/* <div className={styles["about-us-img"]}></div> */}
        </div>
      </section>

      <section className={styles.mission}>
        <div className={styles["mission-container"]}>
          <div>
            <h4>НАША МИССИЯ</h4>
            <h3>Обеспечить самую надежную доходность для наших партнеров</h3>
            <p>
              Это наше главное стремление и краеугольный камень нашей работы. Мы
              прикладываем все усилия и используем передовые финансовые
              стратегии, чтобы гарантировать стабильные и высокие доходы для
              наших партнеров.
            </p>
          </div>
          <div>
            <h4>НАШЕ ВИДЕНЬЕ</h4>
            <h3>Стать лидирующим фондом в инновационных инвестициях </h3>
            <p>
              Мы стремимся стать ведущим инвестиционным фондом с инновационными
              подходами и фокусом на долгосрочном финансовом росте. Наша миссия
              - создавать инвестиции, которые реализуют потенциал капитала и
              обеспечивают устойчивую доходность клиентам.
            </p>
          </div>
        </div>

        <div className={styles["partners-container"]}>
          <Partners />
        </div>
      </section>

      <section className={styles.characteristics}>
        <div className={styles["characteristics-container"]}>
          <div className={styles["characteristics-item"]}>
            <img src={icon1} alt="icon" />
            <div>
              <h4>Инновационность</h4>
              <p>
                Особенность команды заключается в инновационных подходах к
                инвестициям, она постоянно ищет новые стратегии и возможности
                для максимизации доходности.
              </p>
            </div>
          </div>

          <div className={styles["characteristics-item"]}>
            <img src={icon2} alt="icon" />
            <div>
              <h4>Гибкость и адаптивность</h4>
              <p>
                Команда способна оперативно реагировать на изменения на рынке и
                адаптироваться к новым условиям, что обеспечивает преимущество в
                инвестиционной деятельности.
              </p>
            </div>
          </div>

          <div className={styles["characteristics-item"]}>
            <img src={icon3} alt="icon" />
            <div>
              <h4>Коллективный интеллект</h4>
              <p>
                Команда объединяет разнообразных экспертов с различными
                специализациями, что позволяет создавать мощные интеллектуальные
                пулы и принимать прогрессивные решения.
              </p>
            </div>
          </div>

          <div className={styles["characteristics-item"]}>
            <img src={icon4} alt="icon" />
            <div>
              <h4>Доверие и репутация</h4>
              <p>
                Команда уделяет большое внимание долгосрочным отношениям, строит
                доверительные отношения и зарабатывает престиж и репутацию
                благодаря высоким результатам и качественному управлению
                активами.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Questions
        styles={styles}
        className="questions"
        classNameBtn="button"
        btnText="Оставить заявку"
        onClick={() => {}}
      />

      <News renderQty={4} />
    </Layout>
  );
}
