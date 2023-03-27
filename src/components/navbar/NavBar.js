import Link from "next/link";
import { useRouter } from "next/router";
import { navigation } from "@/utils/Constants";
import SideBar from "../sidebar/SideBar";
import classes from "./NavBar.module.css";

function NavBar() {
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
        </div>
      </nav>
      <SideBar />
    </>
  );
}

export default NavBar;
