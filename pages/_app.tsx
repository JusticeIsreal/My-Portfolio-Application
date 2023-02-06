import type { AppProps } from "next/app";
import "../styles/Style.css";
import { BsFacebook } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { ImLocation2 } from "react-icons/im";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillPhone,
  AiFillGithub,
} from "react-icons/ai";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <div className="footer">
        <div>
          {" "}
          <p>
            Dear valued visitors, I would like to extend my sincere gratitude to
            each and every one of you for taking the time to explore my
            portfolio website. Your interest and support means the world to me.
            I hope you found the information and content to be informative and
            engaging. Thank you again for visiting, and I hope you have a great
            day ahead.
          </p>
          <div>
            <div className="socials">
              <span>
                <AiFillPhone />
                <a href="tel:08104015180" target="_blank" rel="noreferrer">
                  08104015180
                </a>
              </span>
              <span>
                <AiFillLinkedin />
                <a
                  href="https://www.linkedin.com/in/justice-isreal-agbonma-314bbb188"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </span>
              <span>
                <AiFillGithub />
                <a
                  href="https://github.com/JusticeIsreal"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </span>
              <span>
                <SiGmail />
                <a
                  href="https://justiceyba@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </span>
              <span>
                <BsFacebook />
                <a
                  href="https://facebook.com/justice.agbonma"
                  target="_blank"
                  rel="noreferrer"
                >
                  facebook
                </a>
              </span>
              <span>
                <AiFillInstagram />
                <a
                  href="https://instagram.com/justice_isreall/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </span>
              <span>
                <IoLogoWhatsapp />
                <a
                  href="https://wa.me/09029356196?text=[hello]"
                  target="_blank"
                  rel="noreferrer"
                >
                  Send Message
                </a>
              </span>
            </div>
            <div>
              <h3>Location</h3>
              <span>ImLocation2</span>
              <p>ph city</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
