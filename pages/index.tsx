import React, { useEffect, useState } from "react";

import Head from "next/head";
// import  "../styles/Style.css";
import Image from "next/image";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

// pages
import StartingLoader from "../pages/StartingLoader";

export default function Home() {
  const [viewLoading, setViewLoading] = useState<boolean>(true);

  const oo = () => {
    setTimeout(() => {
      setViewLoading(false);
    }, 6000);
  };

  useEffect(() => {
    return () => {
      oo();
    };
  }, []);
  return (
    <>
      <Head>
        <title>JUSTICE ISREAL AGBONMA</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
      </Head>
      <main>{viewLoading ? <StartingLoader /> : <h1>dghhgcjgh</h1>} </main>
    </>
  );
}