import Button from "./Button";
import Logo from "./Logo";

export default function Header() {
  return (
    <>
      <header>
        <Logo />
        <div>
          <ul>
            <li>Главная</li>
            <li>Компания</li>
            <li>Направления</li>
          </ul>
          <Button>Связаться</Button>
        </div>
      </header>
    </>
  );
}
