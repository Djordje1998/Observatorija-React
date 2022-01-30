import React from "react";

const Input = ({ nameField, handleInput }) => {
  return (
    <div className="row mb-3">
      <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
        {nameField}
      </label>
      <div className="col-sm-10">
        <input
          type="text"
          name={nameField}
          className="form-control"
          id="colFormLabel"
          placeholder={nameField + "..."}
          onInput={handleInput}
        ></input>
      </div>
    </div>
  );
};

export default Input;
