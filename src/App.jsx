import { Routes, Route } from "react-router-dom";
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
