import axios from "axios";

export const register = (payload) => {
    let registerData = axios
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
    return registerData;
};

export const logins = (payload) => {
    let postData = axios
        .post("http://localhost:4000/login", payload, {
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
    return postData;
};

export const posts = async (payload) => {
    try {
        const postResponse = await axios.get("http://localhost:4000/posts", payload, {
            withCredentials: true,
        });
        return postResponse.data;
    } catch (e) {
        return e.response.data;
    }
};
