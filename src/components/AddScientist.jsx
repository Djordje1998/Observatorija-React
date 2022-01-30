import "./css/main.css";
import "./css/util.css";
import Input from "./Input";
import { useState } from "react";

function AddScientist() {

  const inputNames = ["name", "email", "password"];

  const [scientistData, setScientistData] = useState({
    name: "",
    email: "",
    password: ""
  });

  function handleInput(e) {
    let newScientistData = scientistData;
    newScientistData[e.target.name] = e.target.value;
    setScientistData(newScientistData);
    console.log(scientistData);
  }

  return (
    <div className="col-5 forma">
      <form
      // onSubmit={handleAdd}
      >
        <span className="login100-form-title p-b-51">Add new scientist:</span>
        <div className="col-form-label-sm ">
          {<Input nameField={inputNames[0]} handleInput={handleInput} />}
          {<Input nameField={inputNames[1]} handleInput={handleInput} />}
          {<Input nameField={inputNames[2]} handleInput={handleInput} />}
        </div>
        <div className="container-login100-form-btn m-t-17">
          <button type="submit" className="login100-form-btn">
            Add Scientist
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddScientist;
