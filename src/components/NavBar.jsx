import React from "react";
import axios from "axios";
import { useNavigate, Outlet } from "react-router-dom";

const NavBar = ({ token }) => {
  let navigate = useNavigate();
  function handleLogout() {
    var config = {
      method: "post",
      url: "api/logout",
      headers: {
        Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        window.sessionStorage.setItem("auth_token", null);
        console.log("obrisan token");
        navigate("/login");
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div>
      <nav className="navbar navbar-expand-xl navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Observatorium
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarWithDropdown"
            aria-controls="navbarWithDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse show"
            id="navbarWithDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className={
                    window.location.href.endsWith("stars")
                      ? "nav-link dropdown-toggle active"
                      : "nav-link dropdown-toggle"
                  }
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Stars
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Add
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/stars">
                      Get all
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className={
                    window.location.href.endsWith("scientists")
                      ? "nav-link dropdown-toggle active"
                      : "nav-link dropdown-toggle"
                  }
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Scientists
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Add
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/scientists">
                      Get all
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className={
                    window.location.href.endsWith("observations")
                      ? "nav-link dropdown-toggle active"
                      : "nav-link dropdown-toggle"
                  }
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Observations
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Add
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/observations">
                      Get all
                    </a>
                  </li>
                </ul>
              </li>
              {token != null ? (
                <a className="nav-link" href="#" onClick={handleLogout}>
                  Logout
                </a>
              ) : (
                <a className="nav-link" href="/login">
                  Login
                </a>
              )}
            </ul>
          </div>
        </div>
      </nav>
      {/* ///////////////
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Observatorium
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse show"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <a
                className={
                  window.location.href.endsWith("stars")
                    ? "nav-link active"
                    : "nav-link"
                }
                href="/stars"
              >
                Stars
              </a>
              <a
                className={
                  window.location.href.endsWith("scientists")
                    ? "nav-link active"
                    : "nav-link"
                }
                href="/scientists"
              >
                Scientists
              </a>
              <a className="nav-link" href="#">
                Observations
              </a>
              {window.sessionStorage.getItem("auth_token") != null ? (
                <a className="nav-link" href="#" onClick={handleLogout}>
                  Logout
                </a>
              ) : (
                <a className="nav-link" href="/login">
                  Login
                </a>
              )}
            </div>
          </div>
        </div>
      </nav> */}
      <Outlet />
    </div>
  );
};

export default NavBar;
