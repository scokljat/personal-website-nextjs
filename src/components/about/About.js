import Image from "next/image";
import classes from "./About.module.css";
import globalClasses from "../../styles/Global.module.css";

function About({ data }) {
  return (
    <section className={classes.about} id="about">
      <h1 className={globalClasses.title}>About me</h1>
      <hr className={globalClasses.title_line} />
      <div className={classes.about_container}>
        <div>
          <div className={classes.image}>
            {data?.image && (
              <Image
                src={data?.image}
                alt={data?.name}
                layout={"fill"}
                objectFit={"contain"}
              />
            )}
          </div>
        </div>
        <div className={classes.about_description}>
          <h4>Education: {data?.education}</h4>
          <p>{data?.aboutDescription}</p>
        </div>
      </div>
    </section>
  );
}

export default About;
