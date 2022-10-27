import React from "react";
import { Link } from "react-router-dom";

const BuySms = () => {
  return (
    <div className="container mt-5 successSms">
      <div>
        <i class="fas fa-2x text-success fa-check-circle"></i>
      </div>
      <div>
        <h3>Congratulations</h3>
        <small>
          <Link to="/">Go to home</Link>
        </small>
      </div>
    </div>
  );
};

export default BuySms;
