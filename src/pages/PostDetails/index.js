import React from "react";
import { useParams } from "react-router-dom";

export default function PostDetails() {
  // I WANT THE ID OF THIS POST
  const params = useParams();
  console.log(params);

  // useParams
  return <div>DETAILS</div>;
}
