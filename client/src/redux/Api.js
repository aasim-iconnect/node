import axios from "axios";

export const register = (payload) => {
    return axios
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
};

export const logins = (payload) => {
    return axios
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
