import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedIn } from "../redux/UserSlice";
import { posts } from "../redux/Api";

export default function Post() {
  const username = useSelector((state) => state.user.user.username);
  const emailId = useSelector((state) => state.user.user.emailId);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies([]);
  const dispatch = useDispatch();
  let header = { headers: { token: cookies["token"] } };

  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies["token"]) {
        navigate("/login");
      } else {
        let response = await posts(header);
        if (response === "invalid token") {
          removeCookie("token");
          navigate("/login");
        } else {
          setData(response);
        }
      }
    };
    verifyUser();
  }, [cookies, navigate, removeCookie]);

  const handleLogout = () => {
    removeCookie("token");
    navigate("/login");
    dispatch(setLoggedIn());
  };

  return (
    <div>
      <h1>Posts</h1>
      <p>Hi, {username}</p>
      <p>Your email id is : {emailId}</p>
      <h2>
        {data.posts?.map((e, index) => (
          <p key={index}>{e.title}</p>
        ))}
      </h2>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}
