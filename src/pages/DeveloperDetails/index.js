import React from "react";
import { useParams } from "react-router-dom";

export default function DeveloperDetails() {
  const { id } = useParams();
  console.log("DEVELOPER ID", id);
  return <div>DETAILS FOR A DEV</div>;
}
