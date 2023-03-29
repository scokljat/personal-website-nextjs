import Image from "next/image";
import Link from "next/link";
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
          <p>{data?.aboutDescription}</p>
          <h4>{data?.contactDescription}</h4>
          <div className={classes.contactContainer}>
            {data?.contactLinks?.map((link) => (
              <Link href={link.name} key={link.id}>
                <a target="_blank" rel="noopener noreferrer">
                  {link?.logo && (
                    <Image src={link.logo} height={40} width={40} alt="" />
                  )}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
