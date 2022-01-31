import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import OneObservation from "./OneObservation";

const Observations = () => {
  const [observations, setObservations] = useState();
  //setToken(window.sessionStorage.getItem("auth_token"));
  useEffect(() => {
    if (observations == null) {
      axios.get("api/observations").then((res) => {
        console.log(res.data.observations);
        setObservations(res.data.observations);
      });
    }
  });

  return (
    <div className="cards row row-cols-1 row-cols-sm-2 g-3">
      {observations == null ? (
        <></>
      ) : (
        observations.map((observation) => (
          <OneObservation
            observation={observation}
            key={"" + observation.scientist.id + observation.star.id}
          />
        ))
      )}
    </div>
  );
};

export default Observations;
