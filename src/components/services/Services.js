import classes from "./Services.module.css";
import globalClasses from "../../styles/Global.module.css";

function Services() {
  return (
    <section className={classes.services} id="services">
      <h1 className={globalClasses.title}>My Expertise</h1>
      <hr className={globalClasses.title_line} />
      <div className={classes.services_box}>
        <div className={classes.service_item}>
          <h2>HTML & CSS Responsive Web Design</h2>
          <p>
            Enterprise-class websites need consistent colors, fonts, and design
            to match the organization's branding guidelines. Toptal’s front-end
            developers are experts at designing responsive websites, with CSS at
            the core of front end development alongside JavaScript and HTML.
          </p>
        </div>
        <div className={classes.service_item}>
          <h2>React JS Development</h2>
          <p>
            ReactJS is renowned for its extensibility, adjustability, and
            convenience. Toptal ReactJS developers create complex software for
            your business, including web browsers and mobile application user
            interfaces.
          </p>
        </div>
        <div className={classes.service_item}>
          <h2>React JS Development</h2>
          <p>
            ReactJS is renowned for its extensibility, adjustability, and
            convenience. Toptal ReactJS developers create complex software for
            your business, including web browsers and mobile application user
            interfaces.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
