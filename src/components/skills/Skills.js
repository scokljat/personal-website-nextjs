import Image from "next/image";
import classes from "./Skills.module.css";
import globalClasses from "../../styles/Global.module.css";

function Skills({ data }) {
  return (
    <section className={classes.skills} id="skills">
      <h1 className={globalClasses.title}>Skills</h1>
      <hr className={globalClasses.title_line} />
      <div className={classes.skills_box}>
        {data.map((item) => (
          <div className={classes.skill_item}>
            <Image src={item.image} alt={item.name} height={80} width={80} />
            <h1>{item.name}</h1>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
