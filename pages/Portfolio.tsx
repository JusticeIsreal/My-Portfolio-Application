import { useState } from "react";
import Image from "next/image";
import ProjectsData from "../components/ProjectsData";
import { Carousel } from "@mantine/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

function Portfolio() {
  const [project, setProject] = useState<any>(ProjectsData);
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  // read more function
  const [readPitch, setReadPitch] = useState<boolean>(false);
  return (
    <div className="project-main-con">
      <h1 className="projects">PROJECTS</h1>
      <Carousel
        className="general-project-con"
        loop
        slideSize="33.33333%"
        slideGap="md"
        dragFree
        breakpoints={[
          { maxWidth: "md", slideSize: "50%" },
          { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
        ]}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        // loop
        align="center"
      >
        {project.map((item: any) => (
          <Carousel.Slide key={item.id} className="project-con">
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
                <a href={item.source_code} className="project-code">
                  {item.source_code ? (
                    "Source Code"
                  ) : (
                    <span style={{ fontSize: "13px" }}>Not avaliable</span>
                  )}
                </a>
                <a href={item.live_project} className="project-link">
                  {item.live_project ? (
                    "Live Project"
                  ) : (
                    <span style={{ fontSize: "13px" }}>Not avaliable</span>
                  )}
                </a>
              </div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
}

export default Portfolio;
