import Header from "../common/Header/Header";
import Footer from "../common/Footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
