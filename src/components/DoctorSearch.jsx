import React, { useState } from "react";
import DoctorNavbar from "./DoctorNavbar";

const DoctorSearch = () => {
  const [inputField, setInputField] = useState({
    name: "",
  });

  const inputHandler = (event) => {
    setInputField({ ...inputField, [event.target.name]: event.target.value });
  };

  const readval = () => {
    console.log(inputField);
  };
  return (
    <>
      <DoctorNavbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">
                  Search Doctor
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={inputField.name}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button onClick={readval} className="btn btn-info">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorSearch;
