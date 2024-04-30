import Button from "../Button/Button";

export default function Questions({
  styles,
  className,
  classNameBtn,
  onClick,
  btnText = "Связаться",
}) {
  return (
    <section className={styles[className]}>
      <div>
        <h2>Если у вас есть вопросы, мы будем рады на них ответить</h2>
        <Button className={styles[classNameBtn]} onClick={onClick}>
          {btnText}
        </Button>
      </div>
    </section>
  );
}
