import axios from "axios";

export function fetchDevelopersThunk() {
  return async function(dispatch, getState) {
    const response = await axios.get(
      "https://codaisseur-coders-network.herokuapp.com/developers"
    );
    console.log(response);
  };
}
