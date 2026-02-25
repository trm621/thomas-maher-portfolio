import respdf from "../../assets/ThomasMaherResume2025.pdf";
import "./ResumePage.css";

const skills = [
  "Software Development Lifecycle (SDLC)",
  "Project Management (Agile/Scrum)",
  " Cross-Functional Collaboration",
  "JavaScript",
  "Angular",
  "Python",
  "Typescript",
  "Ember",
  "React",
  "Third-Party/Server-Side APIs",
  "Object-Oriented Programming",
  "MongoDB",
  "Node.js",
  "MySQL",
  "NoSQL",
];

function Resume() {
  return (
    <div>
      <h1 className="resume">
        <a href={respdf} target="_blank" rel="noreferrer">
          {" "}
          Click here to download my resume!
        </a>
      </h1>
      <h1 className="welcomeAbout">Key Skills</h1>
      <ol className="skillList">
        {skills.map((skill) => (
          <li className="skill">{skill}</li>
        ))}
      </ol>
    </div>
  );
}

export default Resume;
