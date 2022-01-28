import React from "react";
import axios from "axios";
import OneStar from "./OneStar";
import { useState, useEffect } from "react";

const Stars = ({setToken}) => {
  const [stars, setStars] = useState();
  setToken(window.sessionStorage.getItem("auth_token"));
  useEffect(() => {
    if (stars == null) {
      axios.get("api/stars").then((res) => {
        console.log(res.data.stars);
        setStars(res.data.stars);
      });
    }
  });
  return (
    <div className="cards row row-cols-1 row-cols-sm-2 g-3">
      {stars == null ? (
        <></>
      ) : (
        stars.map((star) => <OneStar star={star} key={star.id} />)
      )}
    </div>
  );
};

export default Stars;
