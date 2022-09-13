import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../signUp/FormusingHook.css";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Login = () => {
  const navigate = useNavigate()
  const [users, setUsers] = useState({
    email: "",
    password: "",
  });
  const getUserData = (e) => {
    const { name, value } = e.target;
    setUsers(() => {
      return {
        ...users,
        [name]: value,
      };
    });
  };

  const addUser = (e) => {
    e.preventDefault();
    const getUserArr = localStorage.getItem("registeredUserData");
    const passwordPattern =
      /^(?=.*[a-zA-Z])(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{7,}$/;

    const { email, password } = users;
    if (
      email === "" ||
      !email.includes("@") ||
      !email.includes(".") ||
      email.startsWith("@") ||
      email.slice(email.lastIndexOf(".") + 1).length < 2
    ) {
      toast.error("🤨 Enter a valid Email", {
        position: "top-center",
        autoClose: 1500,
        transition: Slide,
      });
    } else if (!passwordPattern.test(password)) {
      toast.error("😣 Enter a valid Password", {
        position: "top-center",
        autoClose: 1500,
        transition: Slide,
      });
    } else {
      if (getUserArr && getUserArr.length) {
        const userData = JSON.parse(getUserArr);
        const loggedinUser = userData.filter((user) => {
          return user.email === email || user.password === password;
        });

        if (loggedinUser.length === 0) {
          toast.error("🤔Please enter right Credentials", {
            position: "top-center",
            autoClose: 1500,
            transition: Slide,
          });
        } else if (loggedinUser[0].email !== email) {
          toast.error("🤨 Enter valid Email", {
            position: "top-center",
            autoClose: 1500,
            transition: Slide,
          });
        } else if (loggedinUser[0].password !== password) {
          toast.error("😣 Wrong Password", {
            position: "top-center",
            autoClose: 1500,
            transition: Slide,
          });
        } else {
          
          toast.success("😊 Login successful", {
            position: "top-center",
            autoClose: 1500,
            transition: Slide,
          });
          setTimeout(() => {
            navigate('/')
          },2000)
          
        }
      }
    }
  };

  return (
    <>
      <div className="signup_wrapper">
        <form>
          <h1 className="title">Log In</h1>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={users.name}
            onChange={getUserData}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={users.name}
            onChange={getUserData}
          />

          <button type="submit" onClick={addUser}>
            Login
          </button>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};
export default Login;
