import React from "react";
import Image from "next/image";
const img =
  "https://res.cloudinary.com/isreal/image/upload/v1675285922/My%20portfolio%20Project/1671744344371-removebg-preview_dxwbbb.png";
function Banner() {
  return (
    <div className="Banner-main-con">
      <div className="full-name">
        <h3>JUSTICE ISREAL</h3>
        <h1>AGBONMA</h1>
      </div>

      <div className="banner-img">
        <Image src={img} alt="my-img" width={500} height={500} className="my-img"></Image>
      </div>
    </div>
  );
}

export default Banner;
