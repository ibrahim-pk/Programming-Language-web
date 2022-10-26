import React, { useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
const Course = () => {
  const course = useLoaderData();

  return (
    <div className="row">
      {course &&
        course.map((item) => (
          <div class="card courseCard  my-3 col-md-4">
            <Link className="text-dark" to={`/course/${item.course_id}`}>
              <img
                class="card-img-top img-fluid"
                src={item.image_url}
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">{item.title}</h5>
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
  );
};

export default Course;
