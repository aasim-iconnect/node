import axios from "axios";

export const register = (payload) => {
  let data = axios
    .post("http://localhost:4000/register", payload)
    .then((response) => {
      return {
        isData: true,
        data: response.data,
      };
    })
    .catch((e) => {
      return {
        isError: true,
        error: e.response.data,
      };
    });
  return data;
};

export const logins = (payload) => {
  const loginData = payload;
  let data = axios
    .post("http://localhost:4000/login", loginData, {
      withCredentials: true,
    })
    .then((response) => {
      return {
        isData: true,
        data: response.data,
      };
    })
    .catch((e) => {
      return {
        isError: true,
        error: e.response.data,
      };
    });
  return data;
};

export const posts = async (payload) => {
  try {
    const response = await axios.get("http://localhost:4000/posts", payload, {
      withCredentials: true,
    });
    return response.data;
  } catch (e) {
    return e.response.data;
  }
};
