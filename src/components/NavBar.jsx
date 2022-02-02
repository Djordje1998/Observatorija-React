import React from "react";
import axios from "axios";
import { useNavigate, Outlet, Link } from "react-router-dom";

const NavBar = ({ token, addToken }) => {
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
        window.sessionStorage.removeItem("auth_token");
        addToken(null);
        console.log("obrisan token");
        navigate("/login");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const handleBlur = (e) => {
    console.log("on blur");
    this.setState({ dropdownVisible: false });
  };

  return (
    <div>
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
              <Link
                className={
                  window.location.href.endsWith("stars")
                    ? "nav-link active"
                    : "nav-link"
                }
                to="/stars"
              >
                List Stars
              </Link>
              <Link
                className={
                  window.location.href.endsWith("stars/add")
                    ? "nav-link active"
                    : "nav-link"
                }
                to="/stars/add"
              >
                Add Stars
              </Link>
              <Link
                className={
                  window.location.href.endsWith("scientists")
                    ? "nav-link active"
                    : "nav-link"
                }
                to="/scientists"
              >
                List Scientists
              </Link>
              <Link
                className={
                  window.location.href.endsWith("scientists/add")
                    ? "nav-link active"
                    : "nav-link"
                }
                to="/scientists/add"
              >
                Add Scientists
              </Link>
              <Link
                className={
                  window.location.href.endsWith("observations")
                    ? "nav-link active"
                    : "nav-link"
                }
                to="/observations"
              >
                List Observations
              </Link>
              {token != null ? (
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
      </nav>
      <Outlet />
    </div>
  );
};

export default NavBar;
