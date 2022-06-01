import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Post() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies([]);

  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies["token"]) {
        navigate("/login");
      } else {
        try {
          const { data } = await axios.get(
            "http://localhost:4000/api/posts",
            { headers: { token: cookies["token"] } },
            { withCredentials: true }
          );
          setData(data);
        } catch (error) {
          if (error.response.data === "invalid token") {
            removeCookie("token");
            navigate("/login");
          }
        }
      }
    };
    verifyUser();
  }, [cookies, navigate, removeCookie]);

  const handleLogout = () => {
    removeCookie("token");
    navigate("/login");
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
