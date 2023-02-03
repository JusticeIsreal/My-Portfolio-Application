import React, { useState, useRef, useEffect } from "react";
import { BsFillMenuButtonFill, BsFillMenuButtonWideFill } from "react-icons/bs";

// import component
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";

function HomePage() {
  return (
    <div className="Homepage">
      <div className="navbar-main-con">
        <NavBar />
      </div>
      <Banner />
    </div>
  );
}

export default HomePage;
