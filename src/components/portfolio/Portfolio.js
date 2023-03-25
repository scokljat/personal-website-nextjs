import Link from "next/link";
import { useState } from "react";
import { projectCategories } from "../../utils/Constants";
import classes from "./Portfolio.module.css";
import globalClasses from "../../styles/Global.module.css";

function Portfolio({ data }) {
  const [catData, setCatData] = useState(data);
  const filterItem = (cateItem) => {
    if (cateItem === "All") {
      setCatData(data);
    } else {
      const updateItem = data.filter((curElem) => {
        return curElem.category === cateItem;
      });
      setCatData(updateItem);
    }
  };

  return (
    <section className={classes.portfolio} id="portfolio">
      <h1 className={globalClasses.title}>Projects</h1>
      <hr className={globalClasses.title_line} />
      <ul className={classes.links}>
        {projectCategories.map((category, index) => (
          <li
            className={classes.active}
            key={index}
            onClick={() => {
              filterItem(category);
            }}
          >
            {category}
          </li>
        ))}
      </ul>

      <div className={classes.content}>
        {catData.map((item) => {
          return (
            <div className={classes.box} key={item.id}>
              <h1>{item.name}</h1>
              <p>{item.description}</p>
              <div className={classes.overlay}>
                <div className={classes.linksContainer}>
                  <Link href={item.githubLink}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className={classes.link}
                    >
                      GitHub
                    </a>
                  </Link>
                  {item.demoLink !== "" && (
                    <Link href={item.demoLink}>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className={classes.link}
                      >
                        Demo
                      </a>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
