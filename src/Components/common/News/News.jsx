import Card from "../Card/Card";
import styles from "./News.module.scss";
import { newsData } from "../../../services/newsData";
import { useState } from "react";
import { onClickOpenPage } from "../../../utils/onClick";
import { useNavigate } from "react-router-dom";
import Post from "../Post/Post";

export default function News({ renderQty = "all" }) {
  // const [render, setRender] = useState("main news");
  // const [id, setId] = useState(null);
  const navigate = useNavigate();

  // доработать открытие новости в отдельном окне (отдельной страницей PostPage)
  // const NewsOnClick = (event) => {
  //   if (renderQty === "all") {
  //     setRender("post");
  //     setId(event.target.id);
  //   } else {
  //     onClickOpenPage(navigate, "/news");
  //   }
  // };

  return (
    <>
      {/* {render === "main news" ? (
        <section className={styles.news}>
          <div>
            <h3>Главные новости</h3>
            <hr />
          </div>
          <div className={styles["news-container"]}>
            {renderQty === "all"
              ? newsData.news.map((news) => (
                  <Card
                    img={news.img}
                    title={news.title}
                    text={news.text}
                    key={news.id}
                    onClick={NewsOnClick}
                  />
                ))
              : newsData.news
                  .slice(0, renderQty)
                  .map((news) => (
                    <Card
                      img={news.img}
                      title={news.title}
                      text={news.text}
                      key={news.id}
                      onClick={NewsOnClick}
                    />
                  ))}
          </div>
        </section>
      ) : (
        <Post id={id} />
      )} */}

      <section className={styles.news}>
        <div>
          <h3>Главные новости</h3>
          <hr />
        </div>
        <div className={styles["news-container"]}>
          {renderQty === "all"
            ? newsData.news.map((news) => (
                <Card
                  img={news.img}
                  title={news.title}
                  text={news.text}
                  key={news.id}
                  onClick={() => {
                    onClickOpenPage(navigate, "/post");
                  }}
                />
              ))
            : newsData.news.slice(0, renderQty).map((news) => (
                <Card
                  img={news.img}
                  title={news.title}
                  text={news.text}
                  key={news.id}
                  onClick={() => {
                    onClickOpenPage(navigate, "/post");
                  }}
                />
              ))}
        </div>
      </section>
    </>
  );
}
