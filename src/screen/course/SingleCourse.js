import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleCourse = () => {
  const singleCourse = useLoaderData();
  return (
    <div className="container">
      <h4>{singleCourse.title}</h4>
      <img src={singleCourse.image_url} alt="" />
      <h6>{singleCourse.details}</h6>
    </div>
  );
};

export default SingleCourse;
