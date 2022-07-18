import React, { useState, useEffect } from "react";
import axios from "axios";
import "./userData.css";
const UserData = () => {
  const [dataVal, setDataVal] = useState([]);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
        setDataVal(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, []);

  const deleteUser = (id) => {
    setDataVal(dataVal.filter((data) => data.id !== id))
  }

  return (
    <>
      <div className="container">
        {dataVal.map((dataInput) => (
          <div key={dataInput.id} className="cardBody">
            <span>Name: {dataInput.name}</span>
            <span>Username: {dataInput.username}</span>
            <span>Email: {dataInput.email}</span>
            <button className="delBtn" onClick={()=> deleteUser(dataInput.id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
};
export default UserData;

/*
fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => setDataVal(actualData))

      .catch((err) => {
        console.log(err.message);
      });
*/
