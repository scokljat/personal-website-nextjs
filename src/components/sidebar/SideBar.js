import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { navigation } from "@/utils/Constants";
import classes from "./SideBar.module.css";

function SideBar({ setMenuIsOpen }) {
  const sideBarRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleClickOutside(event) {
    if (sideBarRef.current && !sideBarRef.current.contains(event.target)) {
      setMenuIsOpen(false);
    }
  }
  return (
    <motion.ul
      className={classes.container}
      ref={sideBarRef}
      initial={{ width: 0 }}
      animate={{
        width: 150,
      }}
      exit={{
        width: 0,
      }}
    >
      {navigation.map((item, index) => (
        <li className={classes.item_container}>
          <Link href={item.href} passHref key={index}>
            <a
              className={
                router.asPath === `/${item.href}`
                  ? classes.active
                  : classes.nonActive
              }
              onClick={() => {
                setMenuIsOpen(false);
              }}
            >
              {item.name}
            </a>
          </Link>
          <hr className={classes.line} />
        </li>
      ))}
    </motion.ul>
  );
}

export default SideBar;
