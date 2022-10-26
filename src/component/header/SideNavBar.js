import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const SideNavBar = () => {
  const [sideNav, setSideNav] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/category")
      .then((res) => res.json())
      .then((data) => setSideNav(data));
  }, []);
  return (
    <div className="text-center sideNavbar">
      <h3>Our Course</h3>
      <hr />
      {sideNav &&
        sideNav.map((item, idx) => (
          <ul key={idx}>
            <li>
              <Link to={`/course/${item.course_id}`}>{item.category}</Link>
            </li>
          </ul>
        ))}
    </div>
  );
};

export default SideNavBar;
