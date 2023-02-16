import { useEffect, useState, useReducer } from "react";
import Image from "next/image";

// import icons
import { HiCode } from "react-icons/hi";
import { SiIbm, SiScrumalliance } from "react-icons/si";
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
      if (countExperience < 2) {
        setCountExperience(countExperience + 1);
      }
      if (countProject < 35) {
        setCountProject(countProject + 1);
      }
      if (countAward < 10) {
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
    "I am a graduate of Maritime Academy of Nigeria with a First Class in Marine Engineering. I am a dedicated, results-oriented, and technically-insightful Software Engineer polished in optimizing systems to address dynamic needs. I am a strong Tech enthusiast, and I am currently pursuing my passion in the Tech industry . Over the years, I have honed my analytical thinking skills and collaboration skills, also acquiring certifications as a Project Manager, Scrum master, Full stack web developer, Enterprise thinking Practitioner , amongst others to develope strong relationship-building skills to ensure client satisfaction in the workplace. My goal is to secure a career opportunity that will allow me to expand upon my current skill set while contributing to the success of a  company. I am passionate about learning new things and collaborating with teammates, So, if you would like to know a little more about me feel free to contact me ";

  const readAll = () => {
    setReadPitch(!readPitch);
  };
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
          {"Hi,I am JUSTICE ISREAL AGBONMA ."} <br/>
          {readPitch ? <>{myPitch}</> : <>{myPitch.substring(0, 320)} ...</>}
          <button className="readMore" onClick={readAll}>
            {readPitch ? "Read less" : "Read more"}
          </button>
        </p>
        
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
      <div className="statistics-con">
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
          <h1 className="statistis-unmber">{countAward}</h1>
          <p className="statistics-name">Awards</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
