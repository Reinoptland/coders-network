import axios from "axios";

function fetchDevelopersSuccess(data) {
  return {
    type: "FETCHED_DEVELOPERS_SUCCESS",
    payload: data
  };
}

export function fetchDevelopersThunk() {
  return async function(dispatch, getState) {
    const response = await axios.get(
      "https://codaisseur-coders-network.herokuapp.com/developers"
    );

    const action = fetchDevelopersSuccess(response.data);

    dispatch(action);
  };
}
