import React, { useEffect, useState } from "react";
import axios from "axios";
import DoctorNavbar from "./DoctorNavbar";

const DoctorView = () => {
  //   const [isLoading, changeLoading] = useState(true);

  const [data, changeData] = useState([]);

  const fetchData = () => {
    axios.post("http://127.0.0.1:8000/api/view/").then((response) => {
      changeData(response.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  //   const fetchData =()=>{
  //         isLoading(false);
  //     }

  return (
    <>
      <DoctorNavbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row g-3">
              <div className="col">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Qualification</th>
                      <th scope="col">Specialization</th>
                      <th scope="col">Address</th>
                      <th scope="col">Department</th>
                      <th scope="col">Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((value, index) => {
                      return (
                        <tr>
                          <th scope="row">{value.name}</th>
                          <td>{value.qualification}</td>
                          <td>{value.specialization}</td>
                          <td>{value.address}</td>
                          <td>{value.department}</td>
                          <td>{value.salary}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorView;
