import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaAlignJustify } from "react-icons/fa";
import { navigation } from "@/utils/Constants";
import SideBar from "../sidebar/SideBar";
import classes from "./NavBar.module.css";

function NavBar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const router = useRouter();

  return (
    <>
      <nav className={classes.navbar}>
        <div className={classes.navbar_container}>
          <ul className={classes.navbar_right}>
            {navigation.map((item, index) => (
              <li key={index}>
                <Link href={item.href} passHref>
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

          <div
            className={classes.toggle}
            onClick={(e) => {
              e.stopPropagation();
              setMenuIsOpen(!menuIsOpen);
            }}
          >
            <FaAlignJustify />
          </div>
        </div>
      </nav>
      {menuIsOpen && <SideBar setMenuIsOpen={setMenuIsOpen} />}
    </>
  );
}

export default NavBar;
