import { useState } from "react";
import Header from "../components/Header";
import Navigation from "../components/NavBar";
import CurrentPage from "./CurrentPage";
import "./HomePage.css";

export function HomePage() {
  const [categories] = useState([
    {
      name: "about",
      description: "none",
    },
    {
      name: "projects",
      description: "none",
    },
    {
      name: "contact",
      description: "none",
    },
    {
      name: "resume",
      description: "none",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);
  return (
    <>
      <Header />
      <title>Thomas Maher Portfolio</title>
      <Navigation
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      />

      <div className="home-page">
        <main>
          <CurrentPage currentCategory={currentCategory}></CurrentPage>
        </main>
      </div>
    </>
  );
}
