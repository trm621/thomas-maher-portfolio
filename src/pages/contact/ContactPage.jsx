import "./ContactPage.css";

function Contact() {
  return (
    <section className="contact">
      <h2>Get in touch with me!</h2>
      <h1>Cell: 203-246-5155</h1>
      <h1>
        Email:{" "}
        <a className="contactInfo" href="mailto: t.maher621@gmail.com">
          t.maher621@gmail.com
        </a>
      </h1>
      <h1>
        
        <a
          className="contactInfo"
          href="https://www.linkedin.com/in/thomas-maher-0b3615217/"
        >
          Linkedin
        </a>
      </h1>
    </section>
  );
}

export default Contact;
