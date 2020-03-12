import React, { useEffect } from "react";
import { fetchDevelopersThunk } from "../../store/developers/actions";
import { selectDevelopers } from "../../store/developers/selectors";
import { useDispatch, useSelector } from "react-redux";

export default function DeveloperList() {
  const dispatch = useDispatch();
  const developers = useSelector(selectDevelopers);
  //   console.log("DEVS IN COMPONENT?", developers);
  useEffect(() => {
    dispatch(fetchDevelopersThunk());
  }, [dispatch]);
  return <div>DEVELOPER LIST</div>;
}
