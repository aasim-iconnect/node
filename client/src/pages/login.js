import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logins } from "../redux/Api";
import {
  setLoggedIn,
  setUserDATA,
  setSuccess,
  setErr,
} from "../redux/UserSlice";
import { login } from "../helper/login";

export default function Login() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "asimshaikh1993@gmail.com",
    password: "123456789",
  });

  //redux
  const success = useSelector((state) => state.user.success);
  const error = useSelector((state) => state.user.error);
  const loginData = { email: data.email, password: data.password };

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // login(loginData);
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
          <h3 className="p-3">{error}</h3>
        </div>
      </div>
    </>
  );
}
