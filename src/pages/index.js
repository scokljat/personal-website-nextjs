import Head from "next/head";
import { useRouter } from "next/router";
import Router from "next/router";
import { useEffect } from "react";
import HomeHeader from "@/components/home/Home";
import Portfolio from "@/components/portfolio/Portfolio";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Contact from "@/components/contact/Contact";

export default function Home({ data }) {
  const router = useRouter();

  useEffect(() => {
    if (router.asPath == "/") {
      Router.push("/#");
    }
  }, []);

  return (
    <>
      <Head>
        <title>Selma Cokljat</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomeHeader data={data?.personalInformations} />
        <Portfolio data={data?.projects} />
        <About data={data?.personalInformations} />
        <Skills data={data?.skills} />
        <Contact />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/personal-website");
  const data = await res.json();

  return {
    props: { data },
    revalidate: 1,
  };
}
