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
      {/* <nav className="navbar navbar-expand-xl navbar-light bg-light">
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
                  onBlur={handleBlur}
                >
                  Stars
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item" to="/stars/add">
                      Add
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/stars">
                      Get all
                    </Link>
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
                    <Link className="dropdown-item" to="#">
                      Add
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/scientists">
                      Get all
                    </Link>
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
                  {console.log(token)}
                </a>
              ) : (
                <a className="nav-link" href="/login">
                  Login
                  {console.log(token)}
                </a>
              )}
            </ul>
          </div>
        </div>
      </nav> */}

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
                Get All Stars
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
                Get All Scientists
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
                Get All Observations
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
