import React, { useEffect } from "react";
import { fetchDevelopersThunk } from "../../store/developers/actions";
import { useDispatch } from "react-redux";

export default function DeveloperList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDevelopersThunk());
  }, [dispatch]);
  return <div>DEVELOPER LIST</div>;
}
