import "./css/main.css";
import "./css/util.css";
import Input from "./Input";
import { useState } from "react";

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

//   function handleAdd(e) {
//     e.preventDefault();
//     axios
//       .post("api/login", userData)
//       .then((res) => {
//         console.log(res.data);
//         if (res.data.success === true) {
//           window.sessionStorage.setItem("auth_token", res.data.access_token);
//           addToken(res.data.access_token);
//           navigate("/");
//         }
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   }

  return (
    <div className="col-5 forma">
      <form
        // onSubmit={handleAdd}
      >
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
