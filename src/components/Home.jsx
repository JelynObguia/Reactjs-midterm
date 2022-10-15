import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
  <div className="m-5">
    <h4>Welcome to Reactjs Midterm </h4>
    <div className="m-auto">
        <Link to="/venues" className="text-white btn btn-success">
        View Venues
        </Link>
    </div>
    </div>
  
  );
};

export default Dashboard;
