import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setLoggedIn, setUserDATA } from "../redux/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { logins } from "../redux/Api";

export default function Login() {
  const navigate = useNavigate();

  const [err, setErr] = useState("");
  const [sucessMessage, setSuccessMessage] = useState("");
  const [logined, setLogined] = useState(false);

  const [data, setData] = useState({
    email: "asimshaikh1993@gmail.com",
    password: "123456789",
  });
  //redux
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.user.username);
  const emailId = useSelector((state) => state.user.user.emailId);

  const login = async () => {
    const loginData = { email: data.email, password: data.password };
    try {
      const response = await logins(loginData);
      if (response.isError) {
        setErr(response.error);
      } else {
        setSuccessMessage(response);
        navigate("/posts");
      }
    } catch (err) {
      console.log("error", err);
    }
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
