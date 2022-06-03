import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  setLoggedIn,
  setUserDATA,
  setSuccess,
  setErr,
} from "../redux/UserSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Register() {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const success = useSelector((state) => state.user.success);
  const error = useSelector((state) => state.user.error);

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
    setErr(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
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
        <p>{error}</p>
      </div>
    </>
  );
}
