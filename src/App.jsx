import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./Components/Pages/MainPage/MainPage";
import AboutPages from "./Components/Pages/AboutPage/AboutPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPages />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;

{
  /* <Routes>
  <Route
    path="/"
    element={
      <MainPage
        auth={isAuth}
        onClick={() => {
          onClickDataSearch(navigate);
        }}
      />
    }
  />

  <Route
    path="/authenter"
    element={
      <AuthPage
        onClickEnter={() => {
          onClickAuthEnter(navigate);
        }}
        onClickReg={() => {
          onClickAuthReg(navigate);
        }}
        path="/authenter"
      />
    }
  />

  <Route
    path="/authreg"
    element={
      <RegPage
        onClickEnter={() => {
          onClickAuthEnter(navigate);
        }}
        onClickReg={() => {
          onClickAuthReg(navigate);
        }}
        path="/authreg"
      />
    }
  />
  <Route element={<PrivateRoute />}>
    <Route path="/datasearch" element={<SearchPage />} />
    <Route path="/datasearch/result" element={<SearchResultPage />} />
  </Route>

  <Route
    path="*"
    element={
      <MainPage
        auth={isAuth}
        onClick={() => {
          onClickDataSearch(navigate);
        }}
      />
    }
  />
</Routes>; */
}
