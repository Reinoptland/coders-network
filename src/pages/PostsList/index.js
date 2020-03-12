import React, { useEffect } from "react";
import axios from "axios";

export default function PostsList() {
  useEffect(function() {
    async function fetchPosts() {
      const response = await axios.get(
        "https://codaisseur-coders-network.herokuapp.com/posts"
      );

      console.log(response);
    }

    fetchPosts();
  }, []);
  return <div>POSTS LIST</div>;
}
