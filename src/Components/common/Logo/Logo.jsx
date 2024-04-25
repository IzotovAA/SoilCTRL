import logoLight from "../../../assets/logo-light.png";
import logoDark from "../../../assets/logo-dark.png";

export default function Logo({ type, className }) {
  return (
    <>
      {type === "light" ? (
        <img src={logoLight} alt="SoilCTRL" className={className} />
      ) : (
        <img src={logoDark} alt="SoilCTRL" className={className} />
      )}
    </>
  );
}
