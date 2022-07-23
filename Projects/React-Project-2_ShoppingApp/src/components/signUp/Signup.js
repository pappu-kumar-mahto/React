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
  let [isError, setIsError] = useState({
    firstNameError: false,
    lastNameError: false,
    emailError: false,
    passwordError: false,
    phoneNumberError: false,
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
      errorMessage: "Please enter valid first name.",
      label: "FirstName",
    },
    {
      id: 2,
      nameVal: "lastName",
      type: "text",
      placeholder: "Last Name",
      errorMessage: "Please enter valid last name.",
      label: "LastName",
    },
    {
      id: 3,
      nameVal: "email",
      type: "text",
      placeholder: "Email",
      errorMessage: "Please enter valid email.",
      label: "Email",
    },
    {
      id: 4,
      nameVal: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Please enter valid password.",
      label: "Password",
    },
    {
      id: 5,
      nameVal: "phoneNumber",
      type: "text",
      placeholder: "Phone Number",
      errorMessage: "Please enter valid phone number.",
      label: "PhoneNumber",
    },
  ];
  const validate =(id)=> (e) => {
    // if (!e.target.value) {
    //   setIsError((isError = true));
 
    // } else {
    //   setIsError(isError = false);
    //   console.log(id);
    // }
    switch (id) {
      case 0: {
        if (!e.target.value || e.target.value.length>2) {
          setIsError({...isError,firstNameError:true});
        } else {
          setIsError({...isError,firstNameError:false}) 
        }
        break;
      }
      case 1: {
        if (!e.target.value || e.target.value.length > 2) {
          setIsError({...isError,lastNameError:true});
        } else {
          setIsError({...isError,lastNameError:false}) 
        }
        break;
      }
      case 2: {
        if (e.target.value === "" ||
        !e.target.value.includes("@") ||
        !e.target.value.includes(".") ||
        e.target.value.startsWith("@") ||
        e.target.value.slice(e.target.value.lastIndexOf(".") + 1).length < 2) {
          setIsError({...isError,emailError:true});
        } else {
          setIsError({...isError,emailError:false}) 
        }
        break;
      }
      case 3: {
        if (!e.target.value || e.target.value.length < 6) {
          setIsError({...isError,passwordError:true});
        } else {
          setIsError({...isError,passwordError:false}) 
        }
        break;
      }
      case 4: {
        if (e.target.value === "" ||
        e.target.value.length !== 10 ||
        e.target.value[0] < 6) {
          setIsError({...isError,phoneNumberError:true});
        } else {
          setIsError({...isError,phoneNumberError:false}) 
        }
        break;
      }
      default: {
        return {...isError}
        }
    }
  };

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
              onKeyUp={(e)=> validate(index)(e)}
            />
            <p id="errorMsg">{isError[Object.keys(isError)[index]] ? inputVal.errorMessage:""}</p>
          </div>
        );
      })}
        <button>Submit</button>
      </form>
    </div>
  );
};
export default LoopRender;


//  console.log(Object.keys(isError)[index], isError[Object.keys(isError)[index]])