import "./ContactPage.css";

function Contact() {
  return (
    <section className="contact">
      <h1>Get in touch with me!</h1>
      <h2>Cell: 203-246-5155</h2>
      <h2>
        Email:{" "}
        <a className="contactInfo" href="mailto: t.maher621@gmail.com">
          t.maher621@gmail.com
        </a>
      </h2>
      <h2>
        <a
          className="contactInfo"
          href="https://www.linkedin.com/in/tom-maher-0b3615217/"
          target="_blank"
        >
          LinkedIn
        </a>
      </h2>
    </section>
  );
}

export default Contact;
