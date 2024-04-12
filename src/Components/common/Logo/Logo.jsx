import logoLight from "../../../assets/logo-light.png";
import logoDark from "../../../assets/logo-dark.png";
import styles from "./Logo.module.scss";
import { NavLink } from "react-router-dom";

export default function Logo({ type }) {
  return (
    <>
      {type === "light" ? (
        // <NavLink to="/">
        <img src={logoLight} alt="logo" className={styles["logo--light"]} />
      ) : (
        // </NavLink>
        // <NavLink to="/">
        <img src={logoDark} alt="logo" className={styles["logo--dark"]} />
        // </NavLink>
      )}
    </>
  );
}
