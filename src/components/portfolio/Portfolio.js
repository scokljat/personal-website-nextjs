import { useState } from "react";
import { data } from "../../utils/Constants";
import classes from "./Portfolio.module.css";
import Image from "next/image";

function Portfolio() {
  const [item, setItem] = useState(data);
  const filterItem = (cateItem) => {
    const updateItem = data.filter((curElem) => {
      return curElem.category === cateItem;
    });
    setItem(updateItem);
  };
  return (
    <section className={classes.portfolio} id="portfolio">
      <h1 className={classes.title}>Projects</h1>
      <hr className={classes.line} />
      <ul className={classes.links}>
        <li
          className={classes.active}
          onClick={() => {
            setItem(data);
          }}
        >
          All
        </li>
        <li
          className={classes.active}
          onClick={() => {
            filterItem("Products");
          }}
        >
          Products
        </li>
      </ul>

      <div className={classes.content}>
        {item.map((elem, index) => {
          const { cover, title } = elem;
          return (
            <div className={classes.box} key={index}>
              <div className={classes.img}>
                <Image
                  src={cover}
                  alt={title}
                  height={300}
                  width={300}
                  className={classes.image}
                />
              </div>
              <div className={classes.overlay}>
                <h1>{title}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
