import React, { useState } from "react";
import "./signup.css";

const LoopRender = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });
  // let [isError, setIsError]= useState(false)
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
      errorMessage: "Please enter valid name.",
      label: "LastName",
    },
    {
      id: 3,
      nameVal: "email",
      type: "text",
      placeholder: "Email",
      errorMessage: "Please enter valid name.",
      label: "Email",
    },
    {
      id: 4,
      nameVal: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Please enter valid name.",
      label: "Password",
    },
    {
      id: 5,
      nameVal: "phoneNumber",
      type: "number",
      placeholder: "Phone Number",
      errorMessage: "Please enter valid name.",
      label: "PhoneNumber",
    },
  ];
  const validate = (e) => {
        if (!e.target.value) {
          console.log("inside Case IF part", e.target.value)
        } else {
          console.log("inside Case ElsePart", e.target.value)
       }
      }

  return (
    <div className="signup_wrapper">
      <form>
        <h1>SignUp</h1>
        <div className="form_Input">
            <label htmlFor="firstName">firstName</label>
            <input
              placeholder="firstName"
            type="text"
            vlaue="firstName"
              autoComplete="off"
              onChange={onChangeEvent}
              onFocus={validate }
            />
            <p className="errorMsg">"Error"</p>
          </div>

      {/* {inputValues.map((inputVal, index) => {
        return (
          <div key={index} className="form_Input">
            <label htmlFor={inputVal.label}>{inputVal.label}</label>
            <input
              placeholder={inputVal.placeholder}
              type={inputVal.type}
              value={values[inputVal.name]}
              autoComplete="off"
              onChange={onChangeEvent}
              onFocus={()=> validate(inputVal.name) }
            />
            <p className="errorMsg">{inputVal.errorMessage}</p>
          </div>
        );
      })} */}
      <button>Submit</button>
    </form>
    </div>
  );
};
export default LoopRender;
