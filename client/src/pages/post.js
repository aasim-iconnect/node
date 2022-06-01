import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Post() {
  const navigate = useNavigate();
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
  return <div>Post</div>;
}
