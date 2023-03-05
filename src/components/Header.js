import Image from "next/image";
import classes from "./Header.module.css";

function Header({ data }) {
  return (
    <section className={classes.header}>
      <div className={classes.row}>
        <div className={classes.header_content}>
          <div className={classes.title}>
            <h5>Hello, I Am </h5>
            <h1>{data.name}</h1>
          </div>
          <p>{data.description}</p>
          <a href={data.resume} download>
            <button className={classes.button}>Download resume</button>
          </a>
        </div>
      </div>
      <div>
        <Image
          className={classes.image}
          src={data.image}
          alt={data.name}
          width={300}
          height={300}
        />
      </div>
    </section>
  );
}

export default Header;
