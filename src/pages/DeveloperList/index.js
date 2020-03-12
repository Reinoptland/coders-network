import React, { useEffect } from "react";
import { fetchDevelopersThunk } from "../../store/developers/actions";
import { selectDevelopers } from "../../store/developers/selectors";
import { useDispatch, useSelector } from "react-redux";
import DeveloperCard from "../../components/DeveloperCard";

export default function DeveloperList() {
  const dispatch = useDispatch();
  const developers = useSelector(selectDevelopers);
  //   console.log("DEVS IN COMPONENT?", developers);
  useEffect(() => {
    dispatch(fetchDevelopersThunk());
  }, [dispatch]);
  return (
    <div>
      DEVELOPER LIST
      <div>
        {developers.map(developer => {
          console.log(developer);
          return (
            <DeveloperCard
              key={developer.id}
              name={developer.name}
              github_username={developer.github_username}
            />
          );
        })}
      </div>
    </div>
  );
}
