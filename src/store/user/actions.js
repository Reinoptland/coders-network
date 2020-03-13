import axios from "axios";

const baseUrl = "https://codaisseur-coders-network.herokuapp.com";

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
      `${baseUrl}/signup`,
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

export function loginThunk(email, password) {
  return async function(dispatch, getState) {
    console.log(email, password, "IN THUNK");

    const response = await axios.post(`${baseUrl}/login`, {
      email: email,
      password: password
    });

    console.log(response);
  };
}
