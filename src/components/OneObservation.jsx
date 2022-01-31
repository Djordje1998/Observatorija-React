import React from "react";
import OneScientist from "./OneScientist";
import OneStar from "./OneStar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const OneObservation = ({ observation }) => {
  function getDate(date) {
    var date = new Date(date);
    return (
      date.getDate() +
      "/" +
      (date.getMonth() + 1) +
      "/" +
      date.getFullYear() +
      " " +
      date.getHours() +
      ":" +
      date.getMinutes()
    );
  }

  let navigate = useNavigate();

  function deleteObservation() {
    if (window.sessionStorage.getItem("auth_token") == null) {
      alert("Only users with account can delete observation!\nLogin first!");
      return;
    }

    var config = {
      method: "delete",
      url: "api/observations/",
      headers: {
        Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
        "Content-Type": "application/json",
      },
      data: {
        scientist_id: observation.scientist.id,
        star_id: observation.star.id
      }
    };

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        if (response.data.success === true) {
          alert(response.data.message);
          navigate("/");
        } else {
          alert("Error message:\n" + response.data.message);
        }
      })
      .catch(function (error) {
        console.log(error);
        alert("Error");
      });
  }

  return (
    <div className="card col">
      <div className="card-header">
        <h4>
          <b>
            {"Scientist '" +
              observation.scientist.name +
              "' observed star '" +
              observation.star.name +
              "'"}
          </b>
        </h4>
      </div>
      <div className="card-body">
        <div className="card-prop">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="card-text">
                <b>Scientist: </b>
                {
                  <OneScientist
                    scientist={observation.scientist}
                    key={observation.scientist.id}
                    deleteBtn={false}
                  />
                }
              </div>
            </li>
            <li className="list-group-item">
              <div className="card-text">
                <b>Star: </b>{" "}
                <OneStar
                  star={observation.star}
                  key={observation.star.id}
                  deleteBtn={false}
                />
              </div>
            </li>
            <li className="list-group-item">
              <p className="card-text">
                <b>Cognition: </b> {observation.cognition}
              </p>
            </li>
          </ul>
        </div>
        <a
          href="#"
          className={
            window.sessionStorage.getItem("auth_token") == null
              ? "btn-grey btn-primary"
              : "btn btn-primary"
          }
          onClick={deleteObservation}
        >
          Delete
        </a>
      </div>
      <div className="card-footer text-muted">
        <i>Created at: </i>
        {getDate(observation.created_at)} &emsp; <i>Modified at: </i>
        {getDate(observation.updated_at)}
      </div>
    </div>
  );
};

export default OneObservation;
