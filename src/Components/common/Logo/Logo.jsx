import logoLight from "../../../assets/logo-light.png";
import logoDark from "../../../assets/logo-dark.png";
import styles from "./Logo.module.scss";

export default function Logo({ type }) {
  return (
    <>
      {type === "light" ? (
        <img src={logoLight} alt="logo" className={styles["logo--light"]} />
      ) : (
        <img src={logoDark} alt="logo" className={styles["logo--dark"]} />
      )}
    </>
  );
}
