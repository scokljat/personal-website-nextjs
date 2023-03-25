import { useRouter } from "next/router";
import { motion } from "framer-motion";
import classes from "./Layout.module.css";

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
