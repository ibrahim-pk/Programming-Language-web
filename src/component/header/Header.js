import React from "react";

const Header = () => {
  return (
    <div className="aboutProgramming container">
      <div className="whatIsProgramme">
        <h3 className="my-2 ProgrammingLan">What is a Programming Language?</h3>
        <h6>
          A programming language is a computer language that is used by
          programmers (developers) to communicate with computers. It is a set of
          instructions written in any specific language ( C, C++, Java, Python)
          to perform a specific task
        </h6>
      </div>
      <div className="headerImg">
        <img
          className="img-fluid"
          src="https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2022/opinion/shutterstock1914164533-1652959735.jpg&w=900&height=601"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
