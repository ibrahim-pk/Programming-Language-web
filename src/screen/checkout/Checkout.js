import React, { useContext, useState } from "react";
import { AuthContext } from "../../component/authProvider/AuthProvider";

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const [country, setCountry] = useState("");
  const [distic, setDistic] = useState("");
  const [zip, setZip] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location = "/buy/success";
  };
  return (
    <div className="container my-5">
      <h3>Checkout form</h3>
      <hr />
      <div className="card p-4">
        <form onSubmit={handleSubmit}>
          <input
            value={user?.displayName}
            readOnly
            type="text"
            className="form-control my-2"
            placeholder="name"
          />
          <input
            value={user?.email}
            className="form-control my-2"
            readOnly
            type="email"
            placeholder="email"
          />
          <input
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="form-control my-2"
            readOnly
            type="text"
            placeholder="Coutry"
          />
          <input
            value={distic}
            onChange={(e) => setDistic(e.target.value)}
            className="form-control my-2"
            readOnly
            type="text"
            placeholder="Distric"
          />
          <input
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            className="form-control my-2"
            readOnly
            type="text"
            placeholder="Zip code"
          />
          <button className="btn btn-primary">Process</button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
