import ProfilePic from "../../assets/images/profile-picture.jpg";
import "./AboutPage.css";

function About() {
  return (
    <div>
      <h1 className="welcomeAbout">About Me</h1>
      <section className="about my-5">
        <img className="profile-pic" src={ProfilePic} />
        <div id="about">
          <div className="my-2">
            <p className="blurb">
              Hi there! My name is Thomas Maher, but my friends call me Tommy.
              I'm a full stack web developer operating out of Norwalk, CT. I
              have a BA in Creative Writing from Ithaca College (go Bombers!),
              but over the last few years I’ve switched from writing stories to
              writing computer code. At Yahoo Inc., I worked on the Store and
              DSP advertising platforms, contributing to large-scale frontend
              systems. Although relatively new to this field, I've really
              come to love it. Moving around data makes me feel like a wizard
              and that's pretty cool in my eyes. Let's work together! See my
              work in the projects section!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
