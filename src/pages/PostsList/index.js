import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

export default function PostsList() {
  const dispatch = useDispatch();
  useEffect(function() {
    async function fetchPosts() {
      const response = await axios.get(
        "https://codaisseur-coders-network.herokuapp.com/posts"
      );

      console.log(response);
      dispatch({ type: "FETCHED_POSTS_SUCCESS", payload: response.data });
    }

    fetchPosts();
  }, []);
  return <div>POSTS LIST</div>;
}
