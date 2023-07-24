import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="container-fluid bg-info text-center fs-4 text-light py-2">
        <strong>DASHBOARD</strong>
      </div>
      <div className="container text-center my-5">
        <p className="display-3">OOPS!!! Page Not Found!</p>
        <div className="row">
          <div className="col-md-6">
            <div
              className="spinner-grow text-warning"
              role="status"
              style={{ width: "200px", height: "200px" }}
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
          <div className="col-md-6">
            <p className="display-4">We are working on it...</p>
            <p className="display-5">Page will be available soon!!!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
