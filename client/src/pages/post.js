import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedIn, setUserDATA } from "../redux/UserSlice";
import { posts } from "../redux/Api";

export default function Post() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies["token"]) {
        navigate("/login");
      } else {
        //   try {
        //     const { data } = await axios.get(
        //       "http://localhost:4000/posts",
        //       { headers: { token: cookies["token"] } },
        //       { withCredentials: true }
        //     );
        //     setData(data);
        //   } catch (error) {
        //     if (error.response.data === "invalid token") {
        //       removeCookie("token");
        //       navigate("/login");
        //     }
        //   }
        // }
        let response = posts();
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
    // dispatch(setUserDATA());
  };

  return (
    <div>
      <h1>Posts</h1>
      <h2>
        {data.posts?.map((e) => (
          <p key={e.title}>{e.title}</p>
        ))}
      </h2>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}
