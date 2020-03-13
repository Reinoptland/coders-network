import axios from "axios";

export function signUpThunk(name, password, email) {
  return function(dispatch, getState) {
    console.log("INSIDE THUNK", name, password, email);
    // axios.post()
  };
}
