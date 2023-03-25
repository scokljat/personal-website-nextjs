import Image from "next/image";
import classes from "./About.module.css";
import { motion } from "framer-motion";
import globalClasses from "../styles/Global.module.css";
function About({ data }) {
  console.log(data);
  return (
    <section className={classes.about} id="about">
      <h1 className={globalClasses.title}>About me</h1>
      <hr className={globalClasses.title_line} />
      <div className={classes.about_container}>
        <Image src={"/selma.jpg"} height={300} width={250} />
        <div className={classes.about_description}>
          <h4>Education: {data.education}</h4>
          <p>{data.aboutDescription}</p>
        </div>
      </div>
    </section>
  );
}

export default About;
