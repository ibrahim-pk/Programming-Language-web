import React, { useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import SideNavBar from "../../component/header/SideNavBar";
const Course = () => {
  const course = useLoaderData();

  return (
    <div className="row container mt-4">
      <div className="col-md-3">
        <SideNavBar />
      </div>
      <div className="col-md-9">
        <div className="row">
          {course &&
            course.map((item, idx) => (
              <div key={idx} className="card courseCard  my-3 col-md-4">
                <Link className="text-dark" to={`/course/${item.course_id}`}>
                  <img
                    className="card-img-top img-fluid"
                    src={item.image_url}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <h6>Reviews:{item.Reviews}</h6>
                    <h6>Rating:{item.rating.number}</h6>
                    <small>Instructor:{item.author.name}</small>
                    <h5>Price:{item.Price}</h5>
                    {/* <p class="card-text">{item.details}</p> */}
                    <Link
                      to={`/course/${item.course_id}`}
                      className="btn btn-info btn-block align-self-end"
                    >
                      Buy Now!
                    </Link>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
