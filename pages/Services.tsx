import { useEffect, useState } from "react";
// import component
import ServiceData from "../components/ServiceData";

// import react icons

import {
  FaBootstrap,
  FaSass,
  FaGithubSquare,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { CgFigma } from "react-icons/cg";
import {
  SiFirebase,
  SiMysql,
  SiPostgresql,
  SiKubernetes,
  SiDocker,
  SiJquery,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { DiJavascript } from "react-icons/di";

function Services() {
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

  // creating state for all object in servicedata array
  const [categoryBtn, setCategoryBtn] = useState<any>(ServiceData);

  const category = Array.from(
    new Set(categoryBtn.map((item: { category: Service }) => item.category))
  );

  // creating logic to render services based on category
  const displayServices = categoryBtn.filter(
    (item: { category: string }) => item.category === "service"
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
  const router = useRouter();
  const [activeBtn, setActiveBtn] = useState("");
  // const [active, setActive] = useState(category[0]);

  useEffect(() => {
    switch (activeBt) {
      case "service":
        setActiveBt("services");
        break;
      case "technology":
        setActiveBt("technology");
        break;
      case "industry":
        setActiveBt("industry");
        break;
      // default:
      //   setActiveBt("services");
      //   break;
    }
  }, []);
  console.log(activeBt);
  return (
    <div className="service-main-com" id="service">
      <h1 className="what-i-do">TECH-SKILL</h1>
      <div className="service-btn-con">
        {category.map((item: any) => (
          <span
            key={item}
            onClick={(e) => test(e)}
            // className="service-btn-txt"
            className={`${
              activeBt?.toUpperCase() === item
                ? "service-btn-txt active-category"
                : "service-btn-txt"
            }`}
          >
            {/* {activeBt} */}
            {item}
            {/* <div className="hover-line-rule"></div> */}
          </span>
        ))}
      </div>
      <div className="service-details-com">
        {displayService.map((item: any) => (
          <ServicesCategory key={item.id} {...item} />
        ))}
      </div>

      <div className="tech-icons">
        <SiHtml5 className="icon " />
        <SiCss3 className="icon " />
        <FaBootstrap className="icon " />
        <FaSass className="icon " />
        <DiJavascript className="icon " />
        <SiJquery className="icon " />
        <FaGithubSquare className="icon " />
        <FaReact className="icon " />
        <FaNodeJs className="icon " />
        <SiExpress className="icon " />
        <SiMongodb className="icon " />
        <SiMysql className="icon " />
        <SiPostgresql className="icon " />
        <SiDocker className="icon " />
        <SiKubernetes className="icon " />
        <SiFirebase className="icon " />
      </div>
    </div>
  );
}

import React from "react";
import { useRouter } from "next/router";
interface ServicesCategoryProps {
  service: string;
  statement: string;
}

function ServicesCategory({ service, statement }: ServicesCategoryProps) {
  return (
    <div className="service-each-box">
      <h3>{service}</h3>
      <p>{statement}</p>
    </div>
  );
}

export default Services;
