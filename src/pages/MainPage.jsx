import { useState } from "react";
import Header from "../components/Header";
import Navigation from "../components/NavBar";
import About from "./about/AboutPage";
import Project from "./project/ProjectPage";
import Contact from "./contact/ContactPage";
import Resume from "./resume/ResumePage";
import "./MainPage.css";

const CurrentPage = ({ currentCategory }) => {
  const pageswitch = () => {
    switch (currentCategory.name) {
      case "about":
        return <About></About>;
      case "projects":
        return <Project></Project>;
      case "contact":
        return <Contact></Contact>;
      case "resume":
        return <Resume></Resume>;
      default:
        return <About></About>;
    }
  };
  return <div>{pageswitch()}</div>;
};

export default CurrentPage;

export function MainPage() {
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

  return (
    <>
      <Header />
      <title>Thomas Maher's Portfolio</title>
      <Navigation
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      />

      <div className="home-page">
        <main>
          <CurrentPage currentCategory={currentCategory}></CurrentPage>
        </main>
      </div>
    </>
  );
}
