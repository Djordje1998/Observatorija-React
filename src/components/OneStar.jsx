import React from "react";

const OneStar = ({ star }) => {
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
        <a href="#" className="btn btn-primary">
          Details
        </a>
        <a href="#" className="btn btn-primary">
          Delete
        </a>
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
