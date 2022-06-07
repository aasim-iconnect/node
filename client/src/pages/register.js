import {useState} from "react";
import {register} from "../redux/Api";

export default function Register() {
    //input data
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
    });
    //redux
    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")

    const handleChange = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = {
            name: data.name,
            email: data.email,
            password: data.password,
        };
        const registerData = await register(userData)
        if (registerData.isData) {
            setSuccess("User register successfully")
        } else {
            setError(registerData.error)
        }
        console.log("register", registerData)
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
                <p>{success}</p>
            </div>
        </>
    );
}
