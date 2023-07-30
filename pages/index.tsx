import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Inter } from "@next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

const Home: React.FC = () => {
  // firebase
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  return (
    <div className="linktree-main-con">
      <Head>
        <title>JUSTICE ISREAL AGBONMA</title>
        <meta name="description" content="Justice Agbonma" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://res.cloudinary.com/isreal/image/upload/v1690675954/My%20portfolio%20Project/1671744344371-removebg-preview_dxwbbb_Background_Removed_eh44ec.png"
        />
      </Head>
      <div className="linktree-con">
        <div className="top">
          <div className="top-img">
            <Image
              className="img"
              src="https://res.cloudinary.com/isreal/image/upload/v1690675954/My%20portfolio%20Project/1671744344371-removebg-preview_dxwbbb_Background_Removed_eh44ec.png"
              alt="img"
              width={800}
              height={400}
            ></Image>
          </div>
          <div>
            <h1>JUSTICE ISREAL AGBONMA</h1>
            <p>&quot; If I can conceive it, I can achieve it &quot;</p>
          </div>
        </div>

        <div className="lower">
          <a
            href="https://www.justiceagbonma.com/website"
            target="_blank"
            rel="noreferrer"
            className="single-link"
          >
            <div>{/* <img src="" alt="" /> */}</div>
            <p>Personal website</p>
          </a>
          <a
            href="https://www.linkedin.com/in/justice-isreal-agbonma-314bbb188"
            target="_blank"
            rel="noreferrer"
            className="single-link"
          >
            <div>{/* <img src="" alt="" /> */}</div>
            <p>LinkedIn</p>
          </a>
          <a
            href="https://www.instagram.com/reel/Cu6lPUJAQ5N/?igshid=NTc4MTIwNjQ2YQ=="
            target="_blank"
            rel="noreferrer"
            className="single-link"
          >
            <div>{/* <img src="" alt="" /> */}</div>
            <p>Instagram</p>
          </a>
          <a
            href="https://twitter.com/justice_israell/status/1617871709264281601?s=46&t=UJLePVE0i36jIOrHFk3QzA"
            target="_blank"
            rel="noreferrer"
            className="single-link"
          >
            <div>{/* <img src="" alt="" /> */}</div>
            <p>Twitter</p>
          </a>
          <a
            href="https://facebook.com/justice.agbonma"
            target="_blank"
            rel="noreferrer"
            className="single-link"
          >
            <div>{/* <img src="" alt="" /> */}</div>
            <p>Facebook</p>
          </a>
          <a
            href="https://wa.me/+2349029356196?text=hello Justice"
            target="_blank"
            rel="noreferrer"
            className="single-link"
          >
            <div>{/* <img src="" alt="" /> */}</div>
            <p>Whatsapp</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
