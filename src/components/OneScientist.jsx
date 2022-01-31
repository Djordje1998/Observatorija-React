import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const OneScientist = ({ scientist, deleteBtn }) => {
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

  function deleteScientist() {
    if (window.sessionStorage.getItem("auth_token") == null) {
      alert("Only users with account can delete scientist!\nLogin first!");
      return;
    }

    var config = {
      method: "delete",
      url: "api/scientists/" + scientist.id,
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
          <b>{scientist.name}</b>
        </h4>
      </div>
      <div className="card-body">
        <div className="card-prop">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <p className="card-text">
                <b>Scientist name: </b> {scientist.name}
              </p>
            </li>
            <li className="list-group-item">
              <p className="card-text">
                <b>Scientist email: </b> {scientist.email}
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
            onClick={deleteScientist}
          >
            Delete
          </a>
        ) : (
          <></>
        )}
      </div>
      <div className="card-footer text-muted">
        <i>Created at: </i>
        {getDate(scientist.created_at)} &emsp; <i>Modified at: </i>
        {getDate(scientist.updated_at)}
      </div>
    </div>
  );
};

export default OneScientist;
