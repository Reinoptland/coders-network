import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { thunkExample, fetchPostsThunk } from "../../store/posts/actions";
import { selectPosts } from "../../store/posts/selectors";

export default function PostsList() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  console.log(posts);
  useEffect(
    function() {
      // async function fetchPosts() {
      //   const response = await axios.get(
      //     "https://codaisseur-coders-network.herokuapp.com/posts"
      //   );

      //   console.log(response);
      //   dispatch({ type: "FETCHED_POSTS_SUCCESS", payload: response.data });
      // }

      // fetchPosts();

      // dispatch(thunkExample());
      dispatch(fetchPostsThunk());
    },
    [dispatch]
  );
  return <div>POSTS LIST</div>;
}
