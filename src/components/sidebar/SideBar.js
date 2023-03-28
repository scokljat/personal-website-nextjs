import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { navigation } from "@/utils/Constants";
import classes from "./SideBar.module.css";

function SideBar() {
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false);
  const ref = useRef(null);
  const router = useRouter();

  useOnClickOutside(ref, () => setSideBarIsOpen(false));

  return (
    <motion.div
      className={classes.container}
      ref={ref}
      animate={{
        width: sideBarIsOpen ? 150 : 50,
      }}
    >
      <div
        className={classes.image}
        onClick={() => setSideBarIsOpen(!sideBarIsOpen)}
      >
        <Image
          src={"/images/arrow.svg"}
          height={15}
          width={15}
          className={sideBarIsOpen ? classes.rotate : classes.rotateBack}
        />
      </div>

      <ul style={{ opacity: sideBarIsOpen ? 1 : 0 }}>
        {navigation.map((item, index) => (
          <li className={classes.item_container} key={index}>
            <Link href={item.href} passHref>
              <a
                className={
                  router.asPath === `/${item.href}`
                    ? classes.active
                    : classes.nonActive
                }
                onClick={() => {
                  setSideBarIsOpen(false);
                }}
              >
                {item.name}
              </a>
            </Link>
            <hr className={classes.line} />
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default SideBar;

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}
