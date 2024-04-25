import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./Components/Pages/MainPage/MainPage";
import AboutPages from "./Components/Pages/AboutPage/AboutPage";
import NewsPage from "./Components/Pages/NewsPage/NewsPage";
import ContactsPage from "./Components/Pages/ContactsPage/ContactsPage";
import DirectionsPage from "./Components/Pages/DirectionsPage/DirectionsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPages />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/directions" element={<DirectionsPage />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
