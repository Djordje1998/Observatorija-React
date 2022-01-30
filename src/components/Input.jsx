import React from "react";

const Input = ({ nameField, handleInput }) => {
  return (
    <div className="row mb-3">
      <div className="col-sm-10 wrap-input100 validate-input m-b-16">
        <div className="wrap-input100 validate-input m-b-16">
          <input
            className="input100"
            type={
              nameField === "email"
                ? "email"
                : nameField === "password"
                ? "password"
                : "text"
            }
            name={nameField}
            placeholder={
              nameField.charAt(0).toUpperCase() + nameField.slice(1) + " ..."
            }
            onInput={handleInput}
          />
          <span className="focus-input100"></span>
        </div>
      </div>
    </div>
  );
};

export default Input;
