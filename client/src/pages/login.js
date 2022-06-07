import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logins} from "../redux/Api";
import {setUserDATA} from "../redux/UserSlice";

export default function Login() {
    //redux
    const navigate = useNavigate();
    const dispatch = useDispatch()

    //success and error state
    const [error, setError] = useState("")

    // input data
    const [data, setData] = useState({
        email: "asimshaikh1993@gmail.com",
        password: "123456789",
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    const loginData = {email: data.email, password: data.password};
        const response = await logins(loginData)
        if (response.isData) {
            navigate("/posts")
            dispatch(setUserDATA(response.data))
        } else {
            setError(response.error)
        }
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
                    <h3 className="p-3">{error}</h3>
                </div>
            </div>
        </>
    );
}
