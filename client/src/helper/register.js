
export default function Login () {
  try {
  let x = await register(userData);
  console.log(x);
  if (x.isError) {
    console.log(x.error);
    dispatch(setErr(x.error));
  } else {
    dispatch(setLoggedIn());
    dispatch(setSuccess(x.data));
    dispatch(setErr(" "));
  }
} catch (err) {
  console.log("error", err);
}}
