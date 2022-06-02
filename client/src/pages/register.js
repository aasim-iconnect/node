import React, { useState } from "react";
import axios from "axios";
import Error from "../components/Error";

export default function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const login = () => {
    const loginData = { email: data.email, password: data.password };
    axios
      .post("http://localhost:4000/login", loginData)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
    setErrMessage(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    try {
      let data = axios
        .post("http://localhost:4000/register", userData)
        .then((res) => {
          setSuccessMessage(res.data);
          login();
        })
        .catch((e) => {
          setErrMessage(e.response.data);
          setError(true);
        });
    } catch (err) {
      console.log("error", err.data.message);
    }
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              value={data.name}
              name="name"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>E-mail</label>
            <input
              type="email"
              value={data.email}
              name="email"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              name="password"
              type="password"
              value={data.password}
              onChange={handleChange}
            />
          </div>
          <button>Submit</button>
        </form>
        <Error errMessage={errMessage}></Error>
        {successMessage}
      </div>
    </>
  );
}
