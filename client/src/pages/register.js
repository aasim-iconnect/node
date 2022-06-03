import React, { useState } from "react";
import Error from "../components/Error";
import { register, logins } from "../redux/Api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    const loginData = { email: data.email, password: data.password };
    const x = await logins(loginData);
    navigate("/posts");
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
    setErrMessage(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    try {
      let x = await register(userData);
      if (x.isError) {
        setErrMessage(x.error);
        setError(true);
      } else {
        setSuccessMessage(x);
        login();
      }
    } catch (err) {
      console.log("error", err);
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
