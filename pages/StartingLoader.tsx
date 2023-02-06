import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Blockquote } from "@mantine/core";
import { useForm, SubmitHandler } from "react-hook-form";

// img
const img =
  "https://res.cloudinary.com/isreal/image/upload/v1675285922/My%20portfolio%20Project/1671744344371-removebg-preview_dxwbbb.png";

// type for incoming props
interface StartingLoaderProps {
  userDetails: boolean;
}

// app
function StartingLoader(props: StartingLoaderProps) {
  const { userDetails } = props;
  // state for loadung page count number
  const initialCount: number = 0;
  const [count, setCount] = useState<number>(initialCount);

  // state for skill set display
  const [displaySkill, setDisplaySkill] = useState<string>("");
  const [index, setIndex] = useState<number>(0);
  // const [userDetails, setUserDetails] = useState<boolean>(false);
  // LOADING NUMBER
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count === 100) {
        clearInterval(intervalId);
        return;
      }
      setCount(count + 1);
    }, 45);
    return () => clearInterval(intervalId);
  }, [count]);

  // DISPLAY SKILL ONE AFTER ANOTHER
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
    }, 1200);

    return () => clearInterval(interval);
  }, [index, displaySkill]);

  // form value type
  type Inputs = {
    Date: Date;
    name: string;
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    data.Date = new Date();
    localStorage.setItem("visitorInfo", JSON.stringify(data));
    window.location.href = "/";
  };
  return (
    <>
      {userDetails ? (
        <div className="StartingLoading-main-container">
          <div className="loading-animation">
            <h1 className="loading-number">{count} %</h1>
            <h1 className="loading-skill">
              Skill : <span>{displaySkill}</span>
            </h1>
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
      ) : (
        <div>
          <div>
            <Image
              src={img}
              alt="my-img"
              width={500}
              height={500}
              className="my-img"
            ></Image>
          </div>

          <Blockquote cite="– Justice Isreal Agbonma">
            Hello ! <br />
            You are welcome to my website , before you proceed i would like to
            know your name <br />{" "}
            <i>{"I promise you'd only have to do this once"}</i>
          </Blockquote>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input
              type="text"
              placeholder="Enter Name"
              {...register("name", { required: true })}
              className="username"
            />
            {errors.name && <span> Kindly enter your name</span>}

            <input type="submit" value={"SEND"} className="submit" />
          </form>
        </div>
      )}
    </>
  );
}

export default StartingLoader;
