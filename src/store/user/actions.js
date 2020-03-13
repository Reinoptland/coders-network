import axios from "axios";

const baseUrl = "https://codaisseur-coders-network.herokuapp.com";

function userAuthenticated(token) {
  return {
    type: "USER_AUTHENTICATED",
    payload: token
  };
}

function profileFetched(profile) {
  return {
    type: "PROFILE_FETCHED",
    payload: profile
  };
}

export function logout() {
  return {
    type: "LOG_OUT"
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

    // console.log(response);

    const token = response.data.jwt;
    dispatch(userAuthenticated(token));

    const profileResponse = await axios.get(`${baseUrl}/me`, {
      // set headers
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    // console.log(profileResponse.data);
    dispatch(profileFetched(profileResponse.data));
  };
}

export function fetchOwnProfile() {
  return async function(dispatch, getState) {
    const state = getState(); // check if we have a token
    const token = state.user.token;

    if (token === null) return;

    // we have a token, let's check if it valid

    try {
      const profileResponse = await axios.get(`${baseUrl}/me`, {
        // set headers
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      // console.log(profileResponse.data);
      // console.log("WE HAVE A TOKEN");

      dispatch(profileFetched(profileResponse.data));
    } catch (error) {
      // my request failed probably my token is no longer valid
      // it expired, because you can only use it for a couple of hours
      dispatch(logout());
      // console.log(error);
    }
  };
}
