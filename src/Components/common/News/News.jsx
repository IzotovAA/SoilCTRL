import Card from "../Card/Card";
import styles from "./News.module.scss";
import { newsData } from "../../../services/newsData";

export default function News() {
  return (
    <section className={styles.news}>
      <div>
        <h3>Главные новости</h3>
        <hr />
      </div>
      <div className={styles["news-container"]}>
        {newsData.news.map((news) => (
          <Card
            img={news.img}
            title={news.title}
            text={news.text}
            key={news.id}
          />
        ))}
      </div>
    </section>
  );
}
