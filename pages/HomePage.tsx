import React, { useState, useRef, useEffect } from "react";
import { BsFillMenuButtonFill, BsFillMenuButtonWideFill } from "react-icons/bs";

// import component
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import Website from "./website";
import { useRouter } from "next/router";

function HomePage() {
  const router = useRouter();
  // useEffect(() => {
  //   router.push("/website");
  // }, []);
  return (
    <div className="Homepage" id="home">
      <div className="navbar-main-con">
        <NavBar />
      </div>
      <Banner />
    </div>
  );
}

export default HomePage;
