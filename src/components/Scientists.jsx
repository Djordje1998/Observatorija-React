import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import OneScientist from "./OneScientist";

const Scientists = () => {
  const [scientists, setScientists] = useState();
  //setToken(window.sessionStorage.getItem("auth_token"));
  useEffect(() => {
    if (scientists == null) {
      axios.get("api/scientists").then((res) => {
        console.log(res.data.scientists);
        setScientists(res.data.scientists);
      });
    }
  });

  return (
    <div className="cards row row-cols-1 row-cols-sm-2 g-3">
      {scientists == null ? (
        <></>
      ) : (
        scientists.map((scientist) => (
          <OneScientist scientist={scientist} key={scientist.id} deleteBtn={true} />
        ))
      )}
    </div>
  );
};

export default Scientists;
