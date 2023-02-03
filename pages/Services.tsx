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
    <div>
      <div>
        {category.map((item: any) => (
          <h3 key={item} onClick={(e) => test(e)}>
            {item}
          </h3>
        ))}
      </div>
      <div>
        {displayService.map((item: any) => (
          <h3 key={item.id} >
            {item.service}
          </h3>
        ))}
      </div>
    </div>
  );
}

export default Services;
