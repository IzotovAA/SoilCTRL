import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./Components/Pages/MainPage/MainPage";
import AboutPages from "./Components/Pages/AboutPage/AboutPage";
import NewsPage from "./Components/Pages/NewsPage/NewsPage";
import ContactsPage from "./Components/Pages/ContactsPage/ContactsPage";
import DirectionsPage from "./Components/Pages/DirectionsPage/DirectionsPage";
import PostPage from "./Components/Pages/PostPage/PostPage";
import FeedbackFormProvider from "./Components/common/FeedbackForm/FeedbackFormContext";
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <>
      <FeedbackFormProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<AboutPages />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/directions" element={<DirectionsPage />} />
            <Route path="/post" element={<PostPage />} />
            <Route path="*" element={<MainPage />} />
          </Routes>
        </Layout>
      </FeedbackFormProvider>
    </>
  );
}

export default App;
