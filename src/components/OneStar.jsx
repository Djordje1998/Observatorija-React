import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const OneStar = ({ star, deleteBtn }) => {
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

  function deleteStar(e) {
    e.preventDefault();

    if (window.sessionStorage.getItem("auth_token") == null) {
      alert("Only users with account can delete star!\nLogin first!");
      return;
    }

    var config = {
      method: "delete",
      url: "api/stars/" + star.id,
      headers: {
        Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
      },
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
          <b>{star.name}</b>
        </h4>
      </div>
      <div className="card-body">
        <div className="card-prop">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <p className="card-text">
                <b>System: </b>
                {star.system}
              </p>
            </li>
            <li className="list-group-item">
              <p className="card-text">
                <b>Type spectral: </b> {star.spectral}
              </p>
            </li>
            <li className="list-group-item">
              <p className="card-text">
                <b>Size: </b> {star.size}
              </p>
            </li>
          </ul>
        </div>
        {deleteBtn ? (
          <a
            href="#"
            className={
              window.sessionStorage.getItem("auth_token") == null
                ? "btn-grey btn-primary"
                : "btn btn-primary"
            }
            onClick={deleteStar}
          >
            Delete
          </a>
        ) : (
          <></>
        )}
      </div>
      <div className="card-footer text-muted">
        <i>Created at: </i>
        {getDate(star.created_at)} &emsp; <i>Modified at: </i>
        {getDate(star.updated_at)}
      </div>
    </div>
  );
};

export default OneStar;
