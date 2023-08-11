import { useState } from "react";
import Image from "next/image";
import ProjectsData from "../components/ProjectsData";
import { Carousel } from "@mantine/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

function Portfolio() {
  const [project, setProject] = useState<any>(ProjectsData);
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <div className="project-main-con" id="portfolio">
      <h1 className="projects">PROJECTS</h1>
      <div className="general-project-con">
        {project.map((item: any) => (
          <div key={item.id} className="project-con">
            <div className="top-project-con">
              <Image
                className="project-img"
                src={item.img}
                alt="Project image"
                width={800}
                height={400}
              ></Image>
            </div>
            <div className="lower-project-con">
              <h1 className="project-name">{item.project}</h1>
              <p className="project-role">
                <span>Role : </span> {item.role}
              </p>
              <p className="project-details">
                <> {item.details}</>
              </p>
              <div className="project-tech">
                {item.Technology.map((item: any) => (
                  <p key={item}> {item}</p>
                ))}
              </div>
              <div className="project-link-con">
                <a
                  href={item.source_code}
                  target="_blank"
                  rel="noreferrer"
                  className="project-code"
                >
                  {item.source_code ? (
                    "Source Code"
                  ) : (
                    <span style={{ fontSize: "13px" }}>Private</span>
                  )}
                </a>
                <a
                  href={item.live_project}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  {item.live_project ? (
                    "Live Project"
                  ) : (
                    <span style={{ fontSize: "13px" }}>Private</span>
                  )}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br /> <br />
      <a href="https://github.com/JusticeIsreal" target="_blank">
        <p className="more-projects">More avaliable on request</p>
      </a>
    </div>
  );
}

export default Portfolio;
