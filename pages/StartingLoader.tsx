import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Blockquote } from "@mantine/core";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
  onSnapshot,
} from "firebase/firestore";

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

  // FORM TYPE
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

  // SAVE INFO IN LOCAL STORAGE
  const onSubmit: SubmitHandler<Inputs> = async(data) => {
    data.Date = new Date();
    sessionStorage.setItem("visitorInfo", JSON.stringify(data));
    localStorage.setItem("visitorInfo", JSON.stringify(data));

    const db = getFirestore();
    const colRef = collection(db, "firstTimeDetails");
    const person = {
      ...data,
      createdAT: serverTimestamp(),
    };
    await addDoc(colRef, person);
    window.location.href = "/";
  };
  let visitorInfo =
    typeof window !== "undefined"
      ? JSON.parse(sessionStorage.getItem("visitorInfo")!)
      : {};
  let visitorInfo2 =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("visitorInfo")!)
      : {};

  // APP START
  return (
    <>
      {userDetails ? (
        <div className="StartingLoading-main-container">
          <div className="client-name">
            <p>Welcome</p>
            <h2>{visitorInfo.name || visitorInfo2.name}</h2>
          </div>
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
        <div className="visitor-starting-page">
          <div className="my-first-img">
            <Image
              src={img}
              alt="my-img"
              width={500}
              height={500}
              className="img"
              priority
            ></Image>
          </div>

          <Blockquote cite="– Justice Isreal Agbonma" className="welcome-quote">
            <p>
              Hello ! <br />
              You are welcome to my website , before you proceed I would like to
              know your name <br />{" "}
              <i>{"( You'd only have to do this once )"}</i>
            </p>
          </Blockquote>

          <form onSubmit={handleSubmit(onSubmit)} className="visitors-form">
            {/* register your input into the hook by invoking the "register" function */}
            <input
              type="text"
              placeholder="Enter Name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="error-msg"> Kindly enter your name</span>
            )}

            <input type="submit" value={"SUBMIT"} className="submit" />
          </form>
        </div>
      )}
    </>
  );
}

export default StartingLoader;
