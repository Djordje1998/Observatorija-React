import React from "react";

const OneScientist = ({ scientist }) => {
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
  console.log(scientist);
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
        <a href="#" className="btn btn-primary">
          Delete
        </a>
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
