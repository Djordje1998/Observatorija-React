import React from "react";
import axios from "axios";
import OneStar from "./OneStar";
import { useState, useEffect } from "react";

const Stars = () => {
  const [stars, setStars] = useState();
  useEffect(() => {
    if (stars == null) {
      axios.get("api/stars").then((res) => {
        console.log(res.data.stars);
        setStars(res.data.stars);
      });
    }
  });
  return (
    <div>
      <h3>Teese are all stars from database.</h3>
      {stars == null ? (
        <></>
      ) : (
        stars.map((star) => <OneStar star={star} key={star.id} />)
      )}
    </div>
  );
};

export default Stars;
