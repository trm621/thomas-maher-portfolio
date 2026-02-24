import About from './AboutPage';
import Project from './ProjectPage';
import Contact from "./ContactPage";
import Resume from "./ResumePage";

const CurrentPage = ({ currentCategory }) => {
  const pageswitch = () => {
    switch (currentCategory.name) {
      case "about":
        return <About></About>;
      case "projects":
        return <Project></Project>
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