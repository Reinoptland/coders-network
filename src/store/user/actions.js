import axios from "axios";

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

    console.log(response);
  };
}
