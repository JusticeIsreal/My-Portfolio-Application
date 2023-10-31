import { useEffect, useState } from "react";
import Image from "next/image";
import ProjectsData from "../components/ProjectsData";
import { Carousel } from "@mantine/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

function Portfolio() {
  interface Service {
    id: number;
    service: string;
    statement: string;
    category: string;
    subservice: {
      subService1: string;
      subStatement1: string;
      subService2: string;
      subStatement2: string;
    }[];
  }
  const [project, setProject] = useState<any>(ProjectsData);
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  // creating state for all object in servicedata array
  const [categoryBtn, setCategoryBtn] = useState<any>(ProjectsData);

  const category = Array.from(
    new Set(categoryBtn.map((item: { category: Service }) => item.category))
  );

  // creating logic to render services based on category
  const displayServices = categoryBtn.filter(
    (item: { category: string }) => item.category === "web"
  );
  const [displayService, setdisplayService] = useState<any>(displayServices);
  const [activeBt, setActiveBt] = useState<string>();
  const test = (e: any) => {
    setActiveBt(e.target.innerHTML);

    const displayService2 = categoryBtn.filter(
      (item: { category: Service }) => item.category === e.target.textContent
    );
    setdisplayService(displayService2);
  };

  useEffect(() => {
    switch (activeBt) {
      case "web":
        setActiveBt("web");
        break;
      case "mobile":
        setActiveBt("mobile");
        break;
      default:
        setActiveBt("web");
        break;
    }
  }, [activeBt]);
  return (
    <div className="project-main-con" id="portfolio">
      <p>some of my</p>
      <h1 className="projects">PROJECTS</h1>
      <div className="service-btn-con">
        {category.map((item: any) => (
          <span
            key={item}
            onClick={(e) => test(e)}
            // className="service-btn-txt"
            className={`${
              activeBt?.toUpperCase() === item?.toUpperCase()
                ? "service-btn-txt active-category"
                : "service-btn-txt"
            }`}
          >
            WEB / MOBILE
          </span>
        ))}
      </div>
      <div className="general-project-con">
        {displayService.map((item: any) => (
          <ServicesCategory key={item.id} {...item} />
        ))}
        {/* {displayService.map((item: any) => (
          
        {/* ))} */}
      </div>
      <br /> <br />
      <a
        href="https://github.com/JusticeIsreal"
        target="_blank"
        rel="noreferrer"
      >
        <p className="more-projects">click here to see more</p>
      </a>
    </div>
  );
}

interface ServicesCategoryProps {
  service: string;
  statement: string;
  img: string;
  project: string;
  role: string;
  details: string;
  source_code: string;
  live_project: string;
  Technology: string[];
}

function ServicesCategory({
  service,
  statement,
  img,
  project,
  role,
  details,
  Technology,
  source_code,
  live_project,
}: ServicesCategoryProps) {
  return (
    <div className="project-con">
      <div className="top-project-con">
        <Image
          className="project-img"
          src={img}
          alt="Project image"
          width={800}
          height={400}
        ></Image>
      </div>
      <div className="lower-project-con">
        <h1 className="project-name">{project}</h1>
        <p className="project-role">
          <span>Role : </span> {role}
        </p>
        <p className="project-details">
          <> {details}</>
        </p>
        <div className="project-tech">
          {Technology.map((item: any) => (
            <p key={item}> {item}</p>
          ))}
        </div>
        <div className="project-link-con">
          <a
            href={source_code}
            target="_blank"
            rel="noreferrer"
            className="project-code"
          >
            {source_code ? (
              "Source Code"
            ) : (
              <span style={{ fontSize: "13px" }}>Private</span>
            )}
          </a>
          <a
            href={live_project}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            {live_project ? (
              "Live Project"
            ) : (
              <span style={{ fontSize: "13px" }}>Private</span>
            )}
          </a>
        </div>
      </div>
    </div>
  );
}
export default Portfolio;
