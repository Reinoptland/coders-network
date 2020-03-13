import axios from "axios";

const baseUrl = "https://codaisseur-coders-network.herokuapp.com";

function userAuthenticated(token) {
  return {
    type: "USER_AUTHENTICATED",
    payload: token
  };
}

export function signUpThunk(name, password, email) {
  return async function(dispatch, getState) {
    // console.log("INSIDE THUNK", name, password, email);
    const response = await axios.post(
      `${baseUrl}/signup`,
      // send request body as a second argument, just an object with the data
      {
        name: name,
        email: email,
        password: password
      }
    );

    // console.log(response.data.jwt);

    dispatch(userAuthenticated(response.data.jwt));
  };
}

export function loginThunk(email, password) {
  return async function(dispatch, getState) {
    // console.log(email, password, "IN THUNK");

    const response = await axios.post(`${baseUrl}/login`, {
      email: email,
      password: password
    });

    console.log(response);

    const token = response.data.jwt;

    const profileResponse = await axios.get(`${baseUrl}/me`, {
      // set headers
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    console.log(profileResponse);

    // console.log(response);
    dispatch(userAuthenticated(token));
  };
}
