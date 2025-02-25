import Input from "../Input/Input";
import styles from "./FeedbackForm.module.scss";
import Modal from "@mui/material/Modal";
import formClose from "../../../assets/form-close.svg";
import Button from "../Button/Button";

export default function FeedbackForm({ open, onClose, submitForm }) {
  return (
    <Modal open={open} onClose={onClose}>
      <form
        encType="multipart/form-data"
        method="post"
        className={styles.feedback}
        onSubmit={(event) => submitForm(event, onClose)}
        action="send.php"
        id="feedback form"
      >
        <img src={formClose} alt="close" onClick={onClose} />

        <div className={styles["feedback-header"]}>
          <h1>Задайте свой вопрос</h1>
          <p>Мы с радостью ответим на все ваши вопросы в кратчайшие сроки</p>
        </div>

        <div className={styles["feedback-body"]}>
          <div>
            <Input
              className={styles["feedback-body-name"]}
              label={true}
              wrapperClass={styles["input-wrap-half"]}
              labelClass={styles["feedback-body-name-lb"]}
              id="name"
              labelName="Имя"
              name="name"
            />

            <Input
              className={styles["feedback-body-surname"]}
              label={true}
              wrapperClass={styles["input-wrap-half"]}
              labelClass={styles["feedback-body-surname-lb"]}
              id="surname"
              labelName="Фамилия"
              name="surname"
            />
          </div>

          <Input
            className={styles["feedback-body-email"]}
            label={true}
            wrapperClass={styles["input-wrap-full"]}
            labelClass={styles["feedback-body-email-lb"]}
            id="email"
            labelName="Почта или другой удобный способ связи"
            name="email"
          />

          {/* <Input
            className={styles["feedback-body-message"]}
            placeholder="Напишите Ваше сообщение"
            label={true}
            wrapperClass={styles["input-wrap-full"]}
            labelClass={styles["feedback-body-message-lb"]}
            id="message"
            name="Сообщение"
          /> */}

          <div className={styles["input-wrap-full"]}>
            <label
              htmlFor="message"
              className={styles["feedback-body-message-lb"]}
            >
              Сообщение
            </label>

            <textarea
              placeholder="Напишите Ваше сообщение"
              className={styles["feedback-body-message"]}
              id="message"
              name="message"
            ></textarea>
          </div>

          <Button className={styles["feedback-body-btn"]} type="submit">
            Отправить
          </Button>
        </div>
      </form>
    </Modal>
  );
}
