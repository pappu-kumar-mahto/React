import React, { useState } from "react";
import "./testLoop.css";

const LoopRender = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });
  const onChangeEvent = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const inputValues = [
    {
      id: 1,
      nameVal: "firstName",
      type: "text",
      placeholder: "First Name",
      errorMessage: "Please enter valid name.",
      label: "FirstName",
    },
    {
      id: 2,
      nameVal: "lastName",
      type: "text",
      placeholder: "Last Name",
      errorMessage: "",
      label: "LastName",
    },
    {
      id: 3,
      nameVal: "email",
      type: "text",
      placeholder: "Email",
      errorMessage: "",
      label: "Email",
    },
    {
      id: 4,
      nameVal: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "",
      label: "Password",
    },
    {
      id: 5,
      nameVal: "phoneNumber",
      type: "text",
      placeholder: "Phone Number",
      errorMessage: "",
      label: "PhoneNumber",
    },
  ];

  return (
    <div className="signup_wrapper">
      <form>
        <h1>SignUp</h1>
      {inputValues.map((inputVal, index) => {
        return (
          <div key={index} className="form_Input">
            <label htmlFor={inputVal.label}>{inputVal.label}</label>
            <input
              placeholder={inputVal.placeholder}
              type={inputVal.type}
              value={values[inputVal.name]}
              autoComplete="off"
              onChange={onChangeEvent}
            />
            <sapn className="errorMsg">{inputVal.errorMessage}</sapn>
          </div>
        );
      })}
      <button>Submit</button>
    </form>
    </div>
  );
};
export default LoopRender;
