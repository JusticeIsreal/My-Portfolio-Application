"use client";
import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

// pages
import StartingLoader from "./StartingLoader";
import HomePage from "./HomePage";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Review from "./Review";
import Contact from "./Contact";
import Footer from "./Footer";

// firebase
import { initializeApp } from "firebase/app";
import { onSnapshot, collection, getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const Website: React.FC = () => {
  // firebase
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBh-2JN3lsKZNYvPycxEHFFTjxBsG6TNAo",
    authDomain: "myportfolioapp-a52a1.firebaseapp.com",
    projectId: "myportfolioapp-a52a1",
    storageBucket: "myportfolioapp-a52a1.appspot.com",
    messagingSenderId: "802596668410",
    appId: "1:802596668410:web:68b4894386224d56099a43",
    measurementId: "G-Z89ZTM8WR3",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);
  const colRef = collection(db, "visitors");

  const getData = () => {
    onSnapshot(colRef, (snapShot) => {
      type Person = any;
      let people: Array<Person> = [];
      if (snapShot && snapShot.docs) {
        snapShot.docs.forEach((doc) => {
          people.unshift({ ...doc.data(), id: doc.id, createdAt: new Date() });
        });
      }
      console.log(people);
    });
  };

  // page render conditions
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
    let visitorInfolocal =
      typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("visitorInfo")!)
        : {};
    if (!visitorInfolocal) {
      setUserDetails(false);
    } else {
      setUserDetails(true);
    }
  }, []);

  // display animation
  const myRefService = useRef<HTMLDivElement | null>(null);
  const myRefPortfolio = useRef<HTMLDivElement | null>(null);
  const myRefReview = useRef<HTMLDivElement | null>(null);
  const myRefContact = useRef<HTMLDivElement | null>(null);
  const myRefFooter = useRef<HTMLDivElement | null>(null);
  // const myRef = useRef<HTMLDivElement | null>(null);

  // Function to handle scrolling
  const handleScroll = () => {
    // Get the height of the screen
    const screenHeight = window.innerHeight;

    // Get the clientTop and getBoundingClientRect().top of the myRef div
    if (myRefService.current) {
      const rectTop = myRefService.current.getBoundingClientRect().top;
      if (rectTop < screenHeight) {
        myRefService.current.className = "active";
      } else {
        myRefService.current.className = "hide";
      }
    }
    // Get the clientTop and getBoundingClientRect().top of the myRef div
    if (myRefFooter.current) {
      const rectTop = myRefFooter.current.getBoundingClientRect().top;
      if (rectTop < screenHeight) {
        myRefFooter.current.className = "active";
      } else {
        myRefFooter.current.className = "hide";
      }
    }
    // Get the clientTop and getBoundingClientRect().top of the myRef div
    if (myRefReview.current) {
      const rectTop = myRefReview.current.getBoundingClientRect().top;
      if (rectTop < screenHeight) {
        myRefReview.current.className = "active";
      } else {
        myRefReview.current.className = "hide";
      }
    }
    // Get the clientTop and getBoundingClientRect().top of the myRef div
    if (myRefContact.current) {
      const rectTop = myRefContact.current.getBoundingClientRect().top;
      if (rectTop < screenHeight) {
        myRefContact.current.className = "active";
      } else {
        myRefContact.current.className = "hide";
      }
    }
  };

  // Add an event listener for scrolling when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>JUSTICE ISREAL AGBONMA</title>
        <meta name="description" content="Justice Agbonma" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://res.cloudinary.com/isreal/image/upload/v1690675954/My%20portfolio%20Project/1671744344371-removebg-preview_dxwbbb_Background_Removed_eh44ec.png"
        />
      </Head>
      <main>
        {viewLoading ? (
          <>
            <StartingLoader userDetails={userDetails} />
          </>
        ) : (
          <>
            {/* <div ref={myRef}> */}
            <HomePage />
            {/* </div> */}
            <div ref={myRefService}>
              <Services />
            </div>
            <div ref={myRefPortfolio}>
              <Portfolio />
            </div>
            <div ref={myRefReview}>
              <Review />
            </div>
            <div ref={myRefContact}>
              <Contact />
            </div>
            <div ref={myRefFooter}>
              <Footer />
            </div>
          </>
        )}
      </main>
    </>
  );
};

export default Website;
