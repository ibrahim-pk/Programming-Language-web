import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Header from "../../component/header/Header";

const Home = () => {
  const course = useLoaderData();
  // console.log(data);
  return (
    <div>
      <Header />
      <div className="my-3 container">
        <h3>Course</h3>
        <hr />
        <div className=" CourseCardHome">
          {course &&
            course.map((item, idx) => (
              <div key={idx} className="card   my-3">
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

export default Home;
