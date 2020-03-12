import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPostById } from "../../store/posts/actions";
import { useDispatch } from "react-redux";

export default function PostDetails() {
  // I WANT THE ID OF THIS POST
  const params = useParams();
  console.log(params.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostById(params.id));
  }, [dispatch, params.id]);

  return <div>DETAILS</div>;
}
