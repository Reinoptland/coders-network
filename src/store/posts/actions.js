// THIS IS A THUNK
// is a function that returns a function
// the function returned has access to
// - dispatch
// - getState

// Why is this awesome

// - Dispatch multiple actions, as a "flow"
// 1. app is loading
// 2. we got a response, send it to the store
// 3. app is done loading

// 1. app is loading
// 2. We got an error, show the user something
// 3. app is done loading

// - Get access to the state
// - Decide wether we want to fetch things or not

// Logic about fetching is no longer in our component
// - clean
// - seperation of concerns

import axios from "axios";

export function thunkExample() {
  return async function(dispatch, getState) {
    const reduxState = getState();
    console.log("WHAT IS IN THE STATE", reduxState);
    if (reduxState.posts.length === 0) {
      dispatch({ type: "I_AM_LOADING" });
      dispatch({ type: "SOMETHING HAPPENED" });
      dispatch({ type: "SOMETHING ELSE" });
      dispatch({ type: "I_AM_DONE" });
    } else {
      dispatch({ type: "WE_ALREADY_HAVE_WHAT_WE_NEED" });
    }
  };
}

function fetchPostsSucces(data) {
  return { type: "FETCHED_POSTS_SUCCESS", payload: data };
}

export function fetchPostsThunk() {
  return async function(dispatch, getState) {
    const reduxState = getState();
    const limit = 3;
    const postCount = reduxState.posts.rows.length;
    // check if we have posts,
    // if we do have posts, don't do anything
    // console.log(reduxState.posts.rows.length, reduxState.posts.count);
    // if (reduxState.posts.rows.length >= reduxState.posts.count) return; // stop here

    // else we have not posts ->  fetch them

    // reduxState.posts.rows.length (postCount)
    // first time 0
    // once we have 3 posts -> 3
    const response = await axios.get(
      `https://codaisseur-coders-network.herokuapp.com/posts?offset=${postCount}&limit=${limit}`
    );

    console.log(response);
    const action = fetchPostsSucces(response.data);
    dispatch(action);
  };
}

function fetchPostSuccess(data) {
  return {
    type: "FETCH_POST_DETAILS_SUCCESS",
    payload: data
  };
}

export function fetchPostById(postId) {
  return async function(dispatch, getState) {
    const [postResponse, commentsReponse] = await Promise.all([
      axios.get(
        `https://codaisseur-coders-network.herokuapp.com/posts/${postId}`
      ),
      axios.get(
        `https://codaisseur-coders-network.herokuapp.com/posts/${postId}/comments`
      )
    ]);

    // console.log(postResponse, commentsReponse);

    const data = { ...postResponse.data, comments: commentsReponse.data.rows };

    const action = fetchPostSuccess(data);
    // console.log(action);
    dispatch(action);
  };
}
