import Image from "next/image";
import Link from "next/link";
import { personalInformations } from "../../data/data.json";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <footer className={classes.footer}>
      {personalInformations?.contactLinks?.map((link) => (
        <Link href={link.name} key={link.id}>
          <a target="_blank" rel="noopener noreferrer">
            {link?.logo && (
              <Image src={link.logo} height={30} width={30} alt="" />
            )}
          </a>
        </Link>
      ))}
    </footer>
  );
}

export default Footer;
