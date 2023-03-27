import { AnimatePresence } from "framer-motion";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";
import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <AnimatePresence>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AnimatePresence>
      <Footer {...pageProps} />
    </>
  );
}
