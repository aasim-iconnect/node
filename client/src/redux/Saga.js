import { call, put, takeLatest } from "redux-saga/effects";
import { logins, posts } from "./Api";
import { setLoggedIn, setUserDATA } from "./UserSlice";

function* fetchPosts() {
  try {
    const posts = yield call(logins);
    yield put(setLoggedIn());
    // yield put(setUserDATA());
  } catch (e) {
    console.log("saga", e);
  }
}
function* mySaga() {
  yield takeLatest("users/setLoggedIn", fetchPosts);
}

export default mySaga;
