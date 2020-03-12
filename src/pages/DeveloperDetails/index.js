import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDeveloperById } from "../../store/developerDetails/actions";
import { selectDeveloperDetails } from "../../store/developerDetails/selectors";

export default function DeveloperDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const developer = useSelector(selectDeveloperDetails);

  console.log("DEVELOPER ID", id);
  console.log("DEVELOPER", developer);

  useEffect(() => {
    dispatch(fetchDeveloperById(id));
  }, [dispatch, id]);

  return <div>DETAILS FOR A DEV</div>;
}
