import axios from "axios";

function signUpSuccess(token) {
  return {
    type: "SIGN_UP_SUCCESS",
    payload: token
  };
}

export function signUpThunk(name, password, email) {
  return async function(dispatch, getState) {
    console.log("INSIDE THUNK", name, password, email);
    const response = await axios.post(
      "https://codaisseur-coders-network.herokuapp.com/signup",
      // send request body as a second argument, just an object with the data
      {
        name: name,
        email: email,
        password: password
      }
    );

    console.log(response.data.jwt);

    dispatch(signUpSuccess(response.data.jwt));
  };
}
