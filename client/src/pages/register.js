import {useState} from "react";
import {setErr, setSuccess, setUserDATA,} from "../redux/UserSlice";
import {useDispatch, useSelector} from "react-redux";
import {logins, register} from "../redux/Api";

export default function Register() {
    const dispatch = useDispatch();

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const error = useSelector((state) => state.user.error);
    const success = useSelector((state) => state.user.success);

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
          dispatch(setErr(" "))
          dispatch(setSuccess("User register successfully"))
      } else {
          dispatch(setErr(registerData.error))
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
