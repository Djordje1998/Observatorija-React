import "./css/main.css";
import "./css/util.css";
import Input from "./Input";
import { useState } from "react";
import axios from "axios";

const AddStar = () => {
  const inputNames = ["name", "system", "spectral", "size"];

  const [starData, setstarData] = useState({
    name: "",
    system: "",
    spectral: "",
    size: "",
  });

  function handleInput(e) {
    let newStarData = starData;
    newStarData[e.target.name] = e.target.value;
    setstarData(newStarData);
    console.log(starData);
  }

  function handleAdd(e) {
    e.preventDefault();

    if (window.sessionStorage.getItem("auth_token") == null) {
      alert("Only users with account can add star!\nLogin first!");
      return;
    }

    var config = {
      method: "post",
      url: "api/stars",
      headers: {
        Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
        "Content-Type": "application/json",
      },
      data: starData,
    };

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        if (response.data.success === true) {
          alert(response.data.message);
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
    <div className="col-5 forma">
      <form onSubmit={handleAdd}>
        <span className="login100-form-title p-b-51">Add new star:</span>
        <div className="col-form-label-sm ">
          {<Input nameField={inputNames[0]} handleInput={handleInput} />}
          {<Input nameField={inputNames[1]} handleInput={handleInput} />}
          {<Input nameField={inputNames[2]} handleInput={handleInput} />}
          {<Input nameField={inputNames[3]} handleInput={handleInput} />}
        </div>
        <div className="container-login100-form-btn m-t-17">
          <button type="submit" className="login100-form-btn">
            Add Star
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddStar;
