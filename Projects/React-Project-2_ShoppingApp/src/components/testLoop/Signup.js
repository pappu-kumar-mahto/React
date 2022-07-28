import React, { useState } from "react";
import "./signup.css";

const Signup = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });
  let [isError, setIsError] = useState({
    firstNameError: true,
    lastNameError: true,
    emailError: true,
    passwordError: true,
    phoneNumberError: true,
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
      errorMessage: "Password must contain at least one number, one special, one lower/upper character and length must be more than 6.",
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
    switch (id) {
      case 0: {
        if (!e.target.value || e.target.value.length < 2) {
          setIsError({...isError,firstNameError:false});
        } else {
          setIsError({...isError,firstNameError:true}) 
        }
        break;
      }
      case 1: {
        if (!e.target.value || e.target.value.length < 2) {
          setIsError({...isError,lastNameError:false});
        } else {
          setIsError({...isError,lastNameError:true}) 
        }
        break;
      }
      case 2: {
        if (e.target.value === "" ||
        !e.target.value.includes("@") ||
        !e.target.value.includes(".") ||
        e.target.value.startsWith("@") ||
        e.target.value.slice(e.target.value.lastIndexOf(".") + 1).length < 2) {
          setIsError({...isError,emailError:false});
        } else {
          setIsError({...isError,emailError:true}) 
        }
        break;
      }
      case 3: {
        let passwordPattern = /^(?=.*[a-zA-Z])(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{7,}$/
        if (!passwordPattern.test(e.target.value)) {
          setIsError({ ...isError, passwordError: false });
        } else {
          setIsError({...isError,passwordError:true}) 
        }
        break;
      }
      case 4: {
        if (e.target.value === "" || isNaN(e.target.value)||
        e.target.value.length !== 10 ||
        e.target.value[0] < 6) {
          setIsError({...isError,phoneNumberError:false});
        } else {
          setIsError({...isError,phoneNumberError:true}) 
        }
        break;
      }
      default: {
        return {...isError}
        }
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    
  }

  const resetForm = () => {
    console.log({values});
    setValues({firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: ""})
  }

  return (
    <div className="signup_wrapper">
      <form onSubmit={submitForm}>
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
            <p id="errorMsg">{!isError[Object.keys(isError)[index]] ? inputVal.errorMessage:""}</p>
          </div>
        );
      })}
        <button onClick={resetForm}>Submit</button>
      </form>
    </div>
  );
};
export default Signup;


//  console.log(Object.keys(isError)[index], isError[Object.keys(isError)[index]])