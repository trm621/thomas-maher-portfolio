import { useState } from "react";
import TrailTalk from '../../assets/images/project-image-4.jpg'
import BeachBlog from '../../assets/images/main-project-image.jpg'
import BingeBuddy from '../../assets/images/project-image-1.jpg'
import PasswordGenerator from '../../assets/images/project-image-5.png'
import BudgetTracker from '../../assets/images/project-image-7.png'
import ReadMeGenerator from '../../assets/images/project-image-6.jpg'
import SocialMediaBackend from '../../assets/images/project-image-8.jpg'
import './ProjectPage.css'

function Project() {
    const [projects] = useState([
      {
        name: "Trail Talk",
        description: "A social media platfrom to share your experiences at national parks with others from around the world!",
        imgfile: TrailTalk,
        link: 'https://pacific-shelf-58337.herokuapp.com/',
        github: 'https://github.com/trm621/national-park-social-app',
      },
      {
        name: "Beach Blog",
        description: "A blog to post about your favorite beaches!",
        imgfile: BeachBlog,
        link: 'https://evening-retreat-41294.herokuapp.com/',
        github: 'https://github.com/trm621/uconn-project-two',
      },
      {
        name: "Binge Buddy",
        description: "A website built to help find the perfect dinner/movie pairing for movie night! Utilizes third party APIs to find recent films and recipes.",
        imgfile: BingeBuddy,
        link: 'https://trm621.github.io/movie-night-generator/',
        github: 'https://github.com/trm621/movie-night-generator',
      },
      {
        name: "Password Generator",
        description: "A simple application used to generate a strong password with arrays.",
        imgfile: PasswordGenerator,
        link: 'https://trm621.github.io/password-generator/',
        github: 'https://github.com/trm621/password-generator',
      },
      {
        name: "Budget Tracker",
        description: "An application that utilizes service workers and MongoDB to help manage your budget and spending.",
        imgfile: BudgetTracker,
        link: 'https://fathomless-reaches-87217.herokuapp.com/',
        github: 'https://github.com/trm621/budget-tracker',
      },
      {
        name: "ReadMe Generator",
        description: "A Node application used to generate a professional ReadMe file.",
        imgfile: ReadMeGenerator,
        link: 'https://drive.google.com/file/d/16rbgJeUkvjxtn3FyfM9znjDt2WeErmDd/view?usp=sharing',
        github: 'https://github.com/trm621/readme-buddy',
      },
      {
        name: "Social Media Backend",
        description: "A fully functioning back-end for a social media platform.",
        imgfile: SocialMediaBackend,
        link: 'https://drive.google.com/file/d/1MuStxK9iuNjOXKDGQ_wu6186ACuk0QBy/view',
        github: 'https://github.com/trm621/nosql-social-media'
      }
    ]);

    function buildProject(project) {
      return (
          <div className="card">
              <h2 className="project-name">{project.name}</h2>
              <img src={project.imgfile} className="img-thumbnail"/>
              <p>{project.description}</p>
              <ul>
                  <li href={project.link} target="_blank" className="linkText" > Click here to check out the project!</li>
                  <li className="linkText"href={project.github} target="_blank">Click here to view the GitHub Repository.</li>
              </ul>
          </div>
      )
  }

  return (
      <div className="row">
          {projects.map(buildProject)}
      </div>
  )
}

export default Project;