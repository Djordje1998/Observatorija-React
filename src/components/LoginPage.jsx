import "./css/main.css";
import "./css/util.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ addToken }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  function handleInput(e) {
    let newUserData = userData;
    newUserData[e.target.name] = e.target.value;
    setUserData(newUserData);
  }

  function handleLogin(e) {
    e.preventDefault();
    axios
      .post("api/login", userData)
      .then((res) => {
        console.log(res.data);
        if (res.data.success === true) {
          window.sessionStorage.setItem("auth_token", res.data.access_token);
          addToken(res.data.access_token);
          navigate("/");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100 p-t-50 p-b-90">
          <form
            className="login100-form validate-form flex-sb flex-w"
            onSubmit={handleLogin}
          >
            <span className="login100-form-title p-b-51">Login</span>

            <div
              className="wrap-input100 validate-input m-b-16"
              data-validate="Email is required"
            >
              <input
                className="input100"
                type="text"
                name="email"
                placeholder="Email"
                onInput={handleInput}
              />
              <span className="focus-input100"></span>
            </div>

            <div
              className="wrap-input100 validate-input m-b-16"
              data-validate="Password is required"
            >
              <input
                className="input100"
                type="password"
                name="password"
                placeholder="Password"
                onInput={handleInput}
              />
              <span className="focus-input100"></span>
            </div>

            <div className="flex-sb-m w-full p-t-3 p-b-24">
              <div className="contact100-form-checkbox">
                <input
                  className="input-checkbox100"
                  id="ckb1"
                  type="checkbox"
                  name="remember-me"
                />
                <label className="label-checkbox100" htmlFor="ckb1">
                  Remember me
                </label>
              </div>

              <div>
                <a href="/register" className="txt1">
                  Register new account here!
                </a>
              </div>
            </div>

            <div className="container-login100-form-btn m-t-17">
              <button type="submit" className="login100-form-btn">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
