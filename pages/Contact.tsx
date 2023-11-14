import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect, useRef } from "react";
import axios from "axios";
import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
  onSnapshot,
} from "firebase/firestore";
import { Modal, useMantineTheme } from "@mantine/core";
import { Button, Group } from "@mantine/core";

function Contact() {
  const theme = useMantineTheme();

  type Inputs = {
    name: string;
    email: string;
    text: string;
  };

  const {
    reset,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    // FIREBASE
    const db = getFirestore();
    const colRef = collection(db, "visitors");
    const sessionN = JSON.parse(localStorage.getItem("visitorInfo") || "");
    const person = {
      ...sessionN,

      ...data,
      createdAT: serverTimestamp(),
    };
    addDoc(colRef, person);
    let visitorInfo2 =
      typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("visitorInfo")!)
        : {};
    alert(
      "Thank you" +
        " " +
        visitorInfo2.name +
        " , " +
        " your message is well recieved, I will communicate you as soon as I can"
    );
    reset();

    // SEND TO EMAIL
    try {
      const response = await axios.post("/api/sendEmail", {
        companyEmail: data.email,
        number: data.name,
        email: data.email,
        message: data.text,
      });

      if (response.status === 200) {
        // Email sent successfully
        console.log("Email sent successfully");

        // alert("Email sent successfully");
      } else {
        // Failed to send email
        console.log("Failed to send email");
      }
    } catch (error) {
      console.error("Error occurred while sending the email:", error);
    }
  };
  // let visitorInfo =
  //   typeof window !== "undefined"
  //     ? JSON.parse(sessionStorage.getItem("visitorInfo")!)
  //     : {};
  let visitorInfo2 =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("visitorInfo")!)
      : {};

  return (
    <div className="contact" id="contact">
      <h1>MESSAGE || REVIEW</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input
          type="text"
          // value={visitorInfo2.name}
          placeholder="Enter Name"
          {...register("name", { required: true })}
          className="username"
        />
        {errors.name && (
          <span
            className="errror-msg"
            style={{ fontSize: "12px", fontStyle: "italic", color: "red" }}
          >
            Kindly enter your name
          </span>
        )}
        <input
          type="email"
          placeholder="Enter Email"
          {...register("email", { required: true })}
          className="email"
        />
        {errors.email && (
          <span
            className="errror-msg"
            style={{ fontSize: "12px", fontStyle: "italic", color: "red" }}
          >
            Kindly enter your email address
          </span>
        )}
        {/* include validation with required or other standard HTML validation rules */}
        <textarea
          placeholder="Enter message"
          {...register("text", { required: true })}
          className="message"
        ></textarea>

        {/* errors will return when field validation fails  */}
        {errors.text && (
          <span
            className="errror-msg"
            style={{ fontSize: "12px", fontStyle: "italic", color: "red" }}
          >
            This field is required
          </span>
        )}

        <input type="submit" value={"SEND"} className="submit" />
      </form>
    </div>
  );
}

export default Contact;
