import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function Login() {
  const navigate = useNavigate();
  const [err, setErr] = useState("");
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
      .catch((err) => setErr(err.message));
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
      <div className="p-40 bg-blue-100">
        <div className="bg-red-300  rounded-md shadow-lg shadow-sky-400 p-4">
          <form onSubmit={handleSubmit}>
            <div>
              <label className="p-2">E-mail</label>
              <input
                className="bg-slate-200 p-3 m-2"
                type="email"
                value={data.email}
                name="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="p-2">Password</label>
              <input
                className="bg-slate-200 p-3 m-2"
                name="password"
                type="password"
                value={data.password}
                onChange={handleChange}
              />
            </div>
            <button className="bg-red-100 p-4 rounded-lg hover:bg-red-400">
              Submit
            </button>
          </form>
          <h3 className="p-3">{err}</h3>
        </div>
      </div>
    </>
  );
}
