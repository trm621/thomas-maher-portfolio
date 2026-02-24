import respdf from "../../assets/ThomasMaherResume.pdf";
import "./ResumePage.css";

const skills = [
  "JavaScript",
  "Angular",
  "Python",
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
      <h1 className="welcomeAbout">Technical Skills</h1>
      <ol className="skillList">
        {skills.map((skill) => (
          <li>{skill}</li>
        ))}
      </ol>
      <h1 className="resume">
        <a href={respdf} target="_blank" rel="noreferrer">
          {" "}
          Click here to download my resume!
        </a>
      </h1>
    </div>
  );
}

export default Resume;