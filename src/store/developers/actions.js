import axios from "axios";

function fetchDevelopersSuccess(data) {
  return {
    type: "FETCHED_DEVELOPERS_SUCCESS",
    payload: data
  };
}

export function fetchDevelopersThunk() {
  return async function(dispatch, getState) {
    const state = getState();
    console.log(state.developers.rows);

    const developerCount = state.developers.rows.length;
    console.log(developerCount);

    const response = await axios.get(
      `https://codaisseur-coders-network.herokuapp.com/developers?offset=${developerCount}&limit=1`
    );

    const action = fetchDevelopersSuccess(response.data);

    dispatch(action);
  };
}
