import React from "react";
import { Blockquote } from "@mantine/core";
import { BsFacebook } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { ImLocation2 } from "react-icons/im";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillPhone,
  AiFillGithub,
} from "react-icons/ai";
function Footer() {
  return (
    <div className="footer">
      <div className="content-cont">
        <div className="thanks">
          <Blockquote cite="– Justice Isreal Agbonma">
            <p>
              Dear valued visitors, I would like to extend my sincere gratitude
              to you for taking the time to explore my portfolio website. Your
              interest and support means the world to me. I hope you found the
              information and content impressive.Kindly drop an message or a
              review. Thank you again for visiting.
            </p>
          </Blockquote>
        </div>

        <div className="socials-location">
          <h3>Contact me :</h3>
          <div className="socials">
            <span>
              <a href="tel:08104015180" target="_blank" rel="noreferrer">
                {" "}
                <AiFillPhone />
              </a>
            </span>
            <span>
              <a
                href="https://www.linkedin.com/in/justice-isreal-agbonma-314bbb188"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin />
              </a>
            </span>
            <span>
              <a
                href="https://github.com/JusticeIsreal"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub />
              </a>
            </span>
            <span>
              <a
                href="https://justiceyba@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <SiGmail />
              </a>
            </span>
            <span>
              <a
                href="https://facebook.com/justice.agbonma"
                target="_blank"
                rel="noreferrer"
              >
                <BsFacebook />
              </a>
            </span>
            <span>
              <a
                href="https://instagram.com/justice_isreall/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillInstagram />
              </a>
            </span>
            <span>
              <a
                href="https://wa.me/+2349029356196?text=hello"
                target="_blank"
                rel="noreferrer"
              >
                <IoLogoWhatsapp />
              </a>
            </span>
          </div>
          <div
            className="locato"
            style={{
              color: "#b7e8eb",
              textAlign: "center",
            }}
          >
            <h3>Location</h3>
            <span style={{ fontSize: "25px" }}>
              <ImLocation2 />
            </span>
            <p>Port harcourt, Nigeria</p>
          </div>
        </div>
      </div>
      <p
        className="foot"
        style={{
          color: "#b7e8eb",
          textAlign: "center",
          border: "2px solid #b7e8eb",
          marginTop: "10px",
          padding: "5px",
        }}
      >
        <span>&copy;{new Date().getFullYear()}</span>
        <span style={{ padding: "2px 5px" }}>justice isreal agbonma</span>
      </p>
    </div>
  );
}

export default Footer;
