import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { FaAlignJustify } from "react-icons/fa";
import { navigation } from "@/utils/Constants";
import classes from "./NavBar.module.css";

function NavBar() {
  const [state, setState] = useState(true);

  const router = useRouter();

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbar_container}>
        {state ? (
          <ul className={classes.navbar_right}>
            {navigation.map((item, index) => (
              <li>
                <Link href={item.href} passHref key={index}>
                  <a
                    className={
                      router.asPath === `/${item.href}`
                        ? classes.active
                        : classes.nonActive
                    }
                  >
                    {item.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          ""
        )}
      </div>
      <div className={classes.toggle} onClick={() => setState(!state)}>
        <FaAlignJustify />
      </div>
    </nav>
  );
}

export default NavBar;
