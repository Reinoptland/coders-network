import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchDeveloperById } from "../../store/developerDetails/actions";

export default function DeveloperDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();

  console.log("DEVELOPER ID", id);

  useEffect(() => {
    dispatch(fetchDeveloperById(id));
  }, [dispatch, id]);

  return <div>DETAILS FOR A DEV</div>;
}
