import { useEffect, useState, useReducer, useRef } from "react";
import Image from "next/image";
// import CV from "../public/JUSTICE_ISREAL_AGBONMA_CV.pdf";
// import icons
import { HiCode } from "react-icons/hi";
import { SiIbm, SiScrumalliance } from "react-icons/si";
import { FaFileDownload } from "react-icons/fa";
const img =
  "https://res.cloudinary.com/isreal/image/upload/v1675285922/My%20portfolio%20Project/1671744344371-removebg-preview_dxwbbb.png";
function Banner() {
  // state for loadung page count number
  const initialCount: number = 0;
  const [countDegree, setCountDegree] = useState<number>(0);
  const [countExperience, setCountExperience] = useState<number>(initialCount);
  const [countProject, setCountProject] = useState<number>(initialCount);
  const [countAward, setCountAward] = useState<number>(initialCount);

  // LOADING NUMBER
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (countDegree < 1) {
        setCountDegree(countDegree + 1);
      }
      if (countExperience < 3) {
        setCountExperience(countExperience + 1);
      }
      if (countProject < 40) {
        setCountProject(countProject + 1);
      }
      if (countAward < 5) {
        setCountAward(countAward + 1);
      }

      clearInterval(intervalId);
      return;
    }, 50);
    return () => clearInterval(intervalId);
  }, [countDegree, countExperience, countProject, countAward]);

  // read more function
  const [readPitch, setReadPitch] = useState<boolean>(false);
  const myPitch: string =
    "As a professional software engineer, I bring a strong academic background and technical expertise to the table. With a First Class in Marine Engineering from the prestigious Maritime Academy of Nigeria, I have honed my analytical thinking and problem-solving skills, which I now apply to the dynamic world of software engineering. Throughout my career, I have demonstrated dedication and a results-oriented approach in optimizing systems to meet ever-changing needs. I am deeply passionate about technology, and I continuously pursue opportunities to expand my knowledge and skills in the tech industry. Not only am I well-versed in various software development technologies, but I have also acquired certifications as a Project Manager, Scrum Master, and Enterprise Thinking Practitioner, among others. These certifications have equipped me with the necessary skills to excel in a collaborative and fast-paced development environment. My strengths lie in my ability to build strong relationships with clients and team members, ensuring their satisfaction with the end product. I believe in integrating my personal views with the vision and mission of the organization to achieve common goals and drive success. Currently seeking a career opportunity as a full-stack software developer, I am eager to contribute my expertise and passion to a forward-thinking company. With a commitment to continuous learning and professional growth, I am confident in my ability to make meaningful contributions to any software development project. Let's connect and explore how my skills can contribute to the success of your organization. Together, we can create innovative solutions and deliver exceptional results in the ever-evolving world of technology.";

  const readAll = () => {
    setReadPitch(!readPitch);
  };

  // display animation
  const myRef = useRef<HTMLDivElement | null>(null);

  // Function to handle scrolling
  const handleScroll = () => {
    // Get the height of the screen
    const screenHeight = window.innerHeight;

    // Get the clientTop and getBoundingClientRect().top of the myRef div
    if (myRef.current) {
      const rectTop = myRef.current.getBoundingClientRect().top;
      if (rectTop < screenHeight) {
        myRef.current.className = "statistics-con active";
      } else {
        myRef.current.className = "hide";
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
    <div className="Banner-main-con">
      <div className="full-name">
        <h3>JUSTICE ISREAL</h3>
        <h1>AGBONMA</h1>
      </div>

      <div className="banner-img">
        <Image
          src={img}
          alt="my-img"
          width={500}
          height={500}
          className="my-img"
        ></Image>
      </div>

      <div className="pitch-con">
        <p className="pitch">
          {/* {"Hi,I am JUSTICE ISREAL AGBONMA ."} <br /> */}
          {readPitch ? (
            <>
              As a professional full-stack software developer, I bring a strong
              academic background and technical expertise to the table. With a
              First Class in Marine Engineering from the prestigious Maritime
              Academy of Nigeria, I have honed my analytical thinking and
              problem-solving skills, which I now apply to the dynamic world of
              software engineering.
              <br /> <br /> Throughout my career, I have demonstrated dedication
              and a results-oriented approach in optimizing systems to meet
              ever-changing needs. I am deeply passionate about technology, and
              I continuously pursue opportunities to expand my knowledge and
              skills in the tech industry.
              <br /> <br /> Not only am I well-versed in various software
              development technologies, but I have also acquired certifications
              as a Project Manager, Scrum Master, and Enterprise Thinking
              Practitioner, among others. These certifications have equipped me
              with the necessary skills to excel in a collaborative and
              fast-paced development environment.
              <br /> <br /> My strengths lie in my ability to build strong
              relationships with clients and team members, ensuring their
              satisfaction with the end product. I believe in integrating my
              personal views with the vision and mission of the organization to
              achieve common goals and drive success.
              <br /> <br /> Currently seeking a career opportunity as a
              full-stack software developer, I am eager to contribute my
              expertise and passion to a forward-thinking company. With a
              commitment to continuous learning and professional growth, I am
              confident in my ability to make meaningful contributions to any
              software development project.
              <br /> <br /> Let&apos;s connect and explore how my skills can
              contribute to the success of your organization. Together, we can
              create innovative solutions and deliver exceptional results in the
              ever-evolving world of technology.
            </>
          ) : (
            <>{myPitch.substring(0, 320)} ...</>
          )}{" "}
          <button className="readMore" onClick={readAll}>
            {readPitch ? "Read less" : "Read more"}
          </button>
        </p>
        <div className="download-cv">
          {/* <button> */}
          <a href="/JUSTICE_ISREAL_AGBONMA_CV.pdf" download>
            <button className="button-29">
              Click to Download my Cv{" "}
              <span>
                <FaFileDownload />
              </span>
            </button>
          </a>
          {/* </button> */}
        </div>
      </div>
      <section className="myStaticsCon">
        <div className="statCard">
          <h1>
            <HiCode />
          </h1>
          <p>Software Developer</p>
        </div>
        <div className="statCard">
          <h1>
            <SiIbm />
          </h1>
          <p>Project Manager</p>
        </div>
        <div className="statCard">
          <h1>
            <SiScrumalliance />
          </h1>
          <p>Scrum Master</p>
        </div>
      </section>
      <div className="pun">
        <div className="scrolling-text">
          <p>
            ❖ Full Stack Developer ❖ IBM Engineering Systems Design Rhapsody for
            Model Based Systems Engineering (IBM) ❖ Scrum Fundamentals Certified
            (SFC) ❖ Desktop Application Development ❖ Master Project Manager -
            International Project Management Board Certification (MPM) ❖ Project
            management fundamentals (IBM) ❖
          </p>
        </div>
      </div>

      {/* statistics section  */}
      <div className="statistics-con" ref={myRef}>
        <div className="statistics">
          <hr className="line" />
          <h1 className="statistis-unmber">0{countDegree}</h1>
          <p className="statistics-name">Degree</p>
        </div>
        <div className="statistics">
          <hr className="line" />
          <h1 className="statistis-unmber">0{countExperience}</h1>
          <p className="statistics-name">Years in Tech</p>
        </div>
        <div className="statistics">
          <hr className="line" />
          <h1 className="statistis-unmber">{countProject}</h1>
          <p className="statistics-name">Projects</p>
        </div>
        <div className="statistics">
          <hr className="line" />
          <h1 className="statistis-unmber">0{countAward}</h1>
          <p className="statistics-name">Awards</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
