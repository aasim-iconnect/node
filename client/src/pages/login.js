import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [logined, setLogined] = useState(false);
  const [data, setData] = useState({
    email: "john@yahoo.com",
    password: "hellascacao",
  });
  useEffect(() => {
    if (logined) navigate("/posts");
  }, [logined]);

  const login = async () => {
    const loginData = { email: data.email, password: data.password };
    await axios
      .post("http://localhost:4000/api/users/login", loginData, {
        withCredentials: true,
      })
      .then((response) => console.log(response))
      .then((response) => setLogined(true))
      .catch((err) => console.log(err));
  };
  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
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
    </>
  );
}
