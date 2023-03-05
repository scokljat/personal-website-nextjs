import classes from "./Layout.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function Layout({ children }) {
  const router = useRouter();

  return (
    <motion.main
      key={router.asPath}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeIn" }}
      className={classes.main_content}
    >
      {children}
    </motion.main>
  );
}

export default Layout;
