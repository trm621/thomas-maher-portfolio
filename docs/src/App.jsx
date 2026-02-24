import { Routes, Route } from "react-router";
import { MainPage } from "./pages/MainPage";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route index element={<MainPage />}></Route>
    </Routes>
  );
}

export default App;
