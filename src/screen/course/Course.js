import React, { useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
const Course = () => {
  const course = useLoaderData();

  return (
    <div className="row">
      {course &&
        course.map((item) => (
          <div class="card col-md-4">
            <img
              class="card-img-top img-fluid"
              src={item.image_url}
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">{item.title}</h5>
              <p class="card-text">{item.details}</p>
              <Link to={`/course/${item.course_id}`} class="btn btn-info">
                Buy Now!
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Course;
