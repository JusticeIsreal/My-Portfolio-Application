import { useState } from "react";
import Image from "next/image";
import ProjectsData from "../components/ProjectsData";


function Portfolio() {
  const [project, setProject] = useState<any>(ProjectsData);

  console.log(project);
  return (
    <div className="project-main-con">
      <h1 className="projects">PROJECTS</h1>
      <div className="general-project-con">
        {project.map((item: any) => (
          <div key={item.id} className="project-con">
            <div className="lower-project-con">
              <h1 className="project-name">{item.project}</h1>
              <p className="project-role">
                <span>Role : </span> {item.role}
              </p>
              <p className="project-details">{item.details}</p>
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
                    <span>Source Code Not avaliable</span>
                  )}
                </a>
                <a href={item.live_project} className="project-link">
                  {item.live_project ? (
                    "Live Project"
                  ) : (
                    <span>Live Project Not avaliable</span>
                  )}
                </a>
              </div>
            </div>
            <div className="top-project-con">
              <Image
                className="project-img"
                src={item.img}
                alt="Project image"
                width={800}
                height={400}
              ></Image>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
