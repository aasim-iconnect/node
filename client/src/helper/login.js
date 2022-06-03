import { logins } from "../redux/Api";
import {
  setLoggedIn,
  setUserDATA,
  setSuccess,
  setErr,
} from "../redux/UserSlice";

const dispatch = useDispatch();
export const login = async () => {
  try {
    const response = await logins(payload);
    console.log("response", response);
    if (response.isError) {
      setErr(response.error);
      dispatch(setErr(response.error));
    } else {
      dispatch(setLoggedIn());
      dispatch(setErr(" "));
      dispatch(setUserDATA(response.data));
      navigate("/posts");
    }
  } catch (err) {
    console.log("error", err.message);
  }
};

// data from register login
// const loginData = { email: data.email, password: data.password };
// const x = await logins(loginData);
// console.log(x);
// dispatch(setErr(" "));
// dispatch(setData(x));
// navigate("/posts");
