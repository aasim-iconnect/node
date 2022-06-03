import axios from "axios";

export const register = (payload) => {
  let data = axios
    .post("http://localhost:4000/register", payload)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return {
        isError: true,
        error: e.response.data,
      };
    });
};

export const logins = (payload) => {
  const loginData = payload;
  let data = axios
    .post("http://localhost:4000/login", loginData, {
      withCredentials: true,
    })
    .then((response) => response.data)
    .catch((err) => console.log(err));

  return data;
};

export const posts = async (payload) => {
  try {
    const data = await axios.get(
      "http://localhost:4000/posts",
      { payload },
      { withCredentials: true }
    );
    return data;
  } catch (e) {
    return e.response.data;
  }
};
