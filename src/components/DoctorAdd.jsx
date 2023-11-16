import React, { useState } from "react";
import axios from "axios";
import DoctorNavbar from "./DoctorNavbar";

const DoctorAdd = () => {
  const [inputField, setInputField] = useState([
    {
      name: "",
      qualification: "",
      specialization: "",
      address: "",
      department: "",
      salary: "",
    },
  ]);

  const inputHandler = (event) => {
    setInputField({ ...inputField, [event.target.name]: event.target.value });
  };

  const readVal = () => {
    console.log(inputField);
    axios
      .post("http://127.0.0.1:8000/api/add/", inputField)
      .then((response) => {
        alert(response.data.status);
      });
  };

  return (
    <>
      <DoctorNavbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={inputField.name}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Qualification
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="qualification"
                  value={inputField.qualification}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Specialization
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="specialization"
                  value={inputField.specialization}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Department
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="department"
                  value={inputField.department}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Description
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="description"
                  value={inputField.description}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">
                  Salary
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="salary"
                  value={inputField.salary}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <button onClick={readVal} className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorAdd;
