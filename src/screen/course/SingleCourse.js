import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import ReactToPdf from "react-to-pdf";
const SingleCourse = () => {
  const singleCourse = useLoaderData();
  const ref = React.createRef();
  return (
    <div className="container">
      <div className="text-end mt-3">
        <ReactToPdf targetRef={ref} filename="div-blue.pdf">
          {({ toPdf }) => (
            <button className="btn btn-danger btn-sm" onClick={toPdf}>
              Generate pdf
            </button>
          )}
        </ReactToPdf>
      </div>
      <div className="row  my-5">
        <div className="col-md-8">
          <div ref={ref} className="container mx-2">
            <h4>{singleCourse.title}</h4>
            <img
              className="my-2 singleCourseImg"
              src={singleCourse.image_url}
              alt=""
            />
            <h6 className="my-3">
              {" "}
              <strong>Description: </strong>
              <br />
              {singleCourse.details}
            </h6>
            <h6>Reviews:{singleCourse.Reviews}</h6>
            <h6>Rating:{singleCourse.rating.number}</h6>
            <h5>Price:{singleCourse.Price}</h5>
            <div className="my-4">
              <h4>Instractor</h4>
              <hr />
              <div className="author d-flex align-items-center">
                <div className="mx-2">
                  <img
                    className="autorImg"
                    src={singleCourse.author.img}
                    alt=""
                  />
                </div>
                <div>
                  <h5>{singleCourse.author.name}</h5>
                  <h6>Pub:{singleCourse.author.published_date}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-3">
          <div className="card mt-3 p-2">
            <h4>Details</h4>
            <hr />
            <h5>Price:{singleCourse.Price}</h5>
            <button className="btn btn-secondary">
              <Link to="/course/checkout" className="nav-link">
                Checkout
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
