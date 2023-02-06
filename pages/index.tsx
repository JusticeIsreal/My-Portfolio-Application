import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

// pages
import StartingLoader from "../pages/StartingLoader";
import HomePage from "./HomePage";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Review from "./Review";
import Contact from "./Contact";
import Footer from "./Footer";
// import styles from "../styles/Home.module.css";
const Home: React.FC = () => {
  const [viewLoading, setViewLoading] = useState<boolean>(true);

  const [userDetails, setUserDetails] = useState<boolean>(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const loadingPageOut = () => {
    setTimeout(() => {
      if (userDetails) {
        setViewLoading(false);
      }
    }, 6000);
  };

  useEffect(() => {
    loadingPageOut();
  }, [loadingPageOut]);

  useEffect(() => {
    const visitorInfo = sessionStorage.getItem("visitorInfo");
    if (visitorInfo) {
      setUserDetails(true);
    }
  }, [userDetails]);
  return (
    <>
      <Head>
        <title>JUSTICE ISREAL AGBONMA</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
      </Head>
      <main>
        {viewLoading ? (
          <>
            <StartingLoader userDetails={userDetails} />
          </>
        ) : (
          <>
            <HomePage />

            <Services />

            <Portfolio />

            <Review />

            <Contact />

            <Footer />
          </>
        )}
      </main>
    </>
  );
};
export default Home;
