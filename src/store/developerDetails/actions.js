import axios from "axios";

export function fetchDeveloperById(developerId) {
  return async function(dispatch, getState) {
    const response = await axios.get(
      `https://codaisseur-coders-network.herokuapp.com/developers/${developerId}`
    );
    console.log(response);
  };
}
