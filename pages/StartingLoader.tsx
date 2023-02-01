import React, { useEffect, useState } from "react";

function About() {
  const initialCount: number = 0;
  const [count, setCount] = useState<number>(initialCount);
  const [displaySkill, setDisplaySkill] = useState<string>("");
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count === 100) {
        clearInterval(intervalId);
        return;
      }
      setCount(count + 1);
    }, 50);
    return () => clearInterval(intervalId);
  }, [count]);

  useEffect(() => {
    const services: Array<string> = [
      "Web Developer",
      "Software Engineer",
      "Project Manager",
      "Scrum Master",
    ];

    const interval = setInterval(() => {
      if (index === services.length) {
        clearInterval(interval);
        return;
      }
      setDisplaySkill(services[index]);
      setIndex(index + 1);
    }, 1500);

    return () => clearInterval(interval);
  }, [index, displaySkill]);

  return (
    <div className="StartingLoading-main-container">
      <div className="loading-animation">
        <h1 className="loading-number">{count} %</h1>
        <h1>Skill : {displaySkill}</h1>
        <div className="loading-bar">
          <div className="first-load-line">
            <div className="second-load-line"></div>
          </div>
        </div>
      </div>
      <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </div>
  );
}

export default About;
