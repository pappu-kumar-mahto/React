// import React, {useState} from 'react'
import { useForm } from "react-hook-form";
import "./FormusingHook.css";
const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      phonenumber: "",
    },
  });

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <>
      <div className="signup_wrapper">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="title">SignUp</h1>
          <label htmlFor="firstname">First Name</label>
          <input
            className="form_Input"
            {...register("firstname", {
              required: "First name is required",
              pattern: {
                value: /^[A-Za-z]{2,}$/,
                message: "First Name must have more than 2 characters",
              },
            })}
            type="text"
            placeholder="First name"
          />
          <p className="errorMsg">{errors.firstname?.message}</p>
          <label htmlFor="lastname">Last Name</label>
          <input
            className="form_Input"
            {...register("lastname", {
              required: "Last name is required",
              pattern: {
                value: /^[A-Za-z]{2,}$/,
                message: "Last Name must have more than 2 characters",
              },
            })}
            type="text"
            placeholder="Last name"
          />
          <p className="errorMsg">{errors.lastname?.message}</p>
          <label htmlFor="lastname">Email</label>
          <input
            className="form_Input"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please Enter a valid Email",
              },
            })}
            type="text"
            placeholder="Email"
          />
          <p className="errorMsg">{errors.email?.message}</p>
          <label htmlFor="lastname">Password</label>

          <input
            className="form_Input"
            {...register("password", {
              required: "Password is required",
              pattern: {
                value:
                  /^(?=.*[a-zA-Z])(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{7,16}$/,
                message: `Password must be 8-16 character
                 and contain one Numeric character
                  one special character.`,
              },
            })}
            type="password"
            placeholder="Password"
          />
          <p className="errorMsg">{errors.password?.message}</p>
          <label htmlFor="lastname">Phone Number</label>
          <input
            className="form_Input"
            {...register("phonenumber", {
              required: "Phone Number is required",
              pattern: {
                value: /[6-9][0-9]{9}$/,
                message: "Phone Number must be of 10 digits",
              },
            })}
            type="text"
            placeholder="Phone Number"
          />
          <p className="errorMsg">{errors.phonenumber?.message}</p>
          <button type="submit">SignUp</button>
        </form>
      </div>
    </>
  );
};
export default SignupForm;
