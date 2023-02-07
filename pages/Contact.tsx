import { useForm, SubmitHandler } from "react-hook-form";
import { useRef } from "react";

function Contact() {
  type Inputs = {
    username: string;
    email: string;
    message: string;
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  //   console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className="contact" id="contact">
      <h1>MESSAGE || REVIEW</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input
          type="text"
          placeholder="Enter Name"
          {...register("username", { required: true })}
          className="username"
        />
        {errors.username && <span className="errror-msg" style={{fontSize:"12px",fontStyle:"italic",color:"red",}}>Kindly enter your name</span>}
        <input
          type="email"
          placeholder="Enter Email"
          {...register("email", { required: true })}
          className="email"
        />
        {errors.email && <span className="errror-msg" style={{fontSize:"12px",fontStyle:"italic",color:"red",}}>Kindly enter your email address</span>}
        {/* include validation with required or other standard HTML validation rules */}
        <textarea
          placeholder="Enter message"
          {...register("message", { required: true })}
          className="message"
        ></textarea>

        {/* errors will return when field validation fails  */}
        {errors.message && <span className="errror-msg" style={{fontSize:"12px",fontStyle:"italic",color:"red",}}>This field is required</span>}

        <input type="submit" value={"SEND"} className="submit" />
      </form>
    </div>
  );
}

export default Contact;
