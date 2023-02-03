import { useState } from "react";

// import component
import ServiceData from "../components/ServiceData";

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
  const test = (e: any) => {
    const displayService2 = categoryBtn.filter(
      (item: { category: Service }) => item.category === e.target.textContent
    );
    setdisplayService(displayService2);
  };

  return (
    <div className="service-main-com">
      <h1 className="what-i-do">SERVICES</h1>
      <div className="service-btn-con">
        {category.map((item: any) => (
          <p key={item} onClick={(e) => test(e)} className="service-btn-txt">
            {item}
          </p>
        ))}
      </div>
      <div className="service-details-com">
        {displayService.map((item: any) => (
          <ServicesCategory
            key={item.id}
            {...item}
            className="service-each-box"
          />
        ))}
      </div>
    </div>
  );
}

import React from "react";
interface ServicesCategoryProps {
  service: string;
  statement: string;
}

function ServicesCategory({ service, statement }: ServicesCategoryProps) {
  return (
    <>
      <h3>{service}</h3>
      <p>{statement}</p>
    </>
  );
}

export default Services;
