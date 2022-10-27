import React from "react";

const Faq = () => {
  return (
    <div className="container mt-5">
      <h1>Frequntly Ask Questions</h1>
      <hr />
      <div className="qsn1 my-4">
        <h4>1.About your website?</h4>
        <h5 className="mx-4">
          -This is a online programming course website.Here has many programming
          course.
        </h5>
      </div>
      <div className="qsn2 my-4">
        <h4>2.Course Access Duration?</h4>
        <h5 className="mx-4">-Full lifetime access</h5>
      </div>
      <div className="qsn3 my-4">
        <h4>3.How will we get this course?</h4>
        <h5 className="mx-4">
          -At firest login in the website.Then select any course and payment
          this course.
        </h5>
      </div>
      <div className="qsn4 my-4">
        <h4>4.Can we contact in instractor?</h4>
        <h5 className="mx-4">
          -Yes.We will send instractor email.Then you solve any problem from
          instractor
        </h5>
      </div>
      <div className="qsn5 my-4">
        <h4>5.How can I pay for a course?</h4>
        <h5 className="mx-4">
          -You can pay several payment system like debit card,credit
          card,paypal..
        </h5>
      </div>
    </div>
  );
};

export default Faq;
