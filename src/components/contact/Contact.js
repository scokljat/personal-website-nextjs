import { useRef } from "react";
import emailjs from "emailjs-com";
import classes from "./Contact.module.css";
import globalClasses from "../../styles/Global.module.css";
function Contact() {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_r24uzrn",
      "template_muuggs8",
      form.current,
      "Cjb2OzKz7s4moVQsY"
    );
  };

  return (
    <section id="contact" className={classes.contact}>
      <h2 className={globalClasses.title}>Contact Me</h2>
      <hr className={globalClasses.title_line} />
      <form
        onSubmit={handleSubmit}
        className={classes.form_container}
        ref={form}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Full Name"
          required
          className={classes.input_container}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className={classes.input_container}
        />
        <textarea
          name="message"
          rows="7"
          placeholder="Your Message"
          required
          className={classes.input_container}
        ></textarea>
        <button
          type="submit"
          className={globalClasses.button}
          style={{ width: "20%", alignSelf: "center" }}
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
