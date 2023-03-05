import Image from "next/image";
import classes from "./About.module.css";
import { motion } from "framer-motion";
function About() {
  return (
    <section className={classes.about} id="about">
      <h1 className={classes.about_title}>About me</h1>
      <hr className={classes.line} />
      <div className={classes.about_container}>
        <Image src={"/selma.jpg"} height={400} width={400} />
        <div className={classes.about_info}>
          <p>
            Taken from the Latin words "dolorem ipsum", which translates to
            "pain itself", Lorem Ipsum text saw a revival in the mid-20th
            century as placeholder text in printing and design. Below, we've
            shared the origins of Lorem Ipsum, why it's so important, and why
            designers continue to use it today.{" "}
          </p>
          <button className={classes.button}>Download CV</button>
        </div>
      </div>
    </section>
  );
}

export default About;
