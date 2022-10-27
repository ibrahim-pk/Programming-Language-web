import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { signOut } from "firebase/auth";
const Navbar = () => {
  const { user, setLoading, auth } = useContext(AuthContext);
  //console.log(user.photoURL);
  const logOutUser = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        toast("Logout successfuly");
        window.location = "/";
      })
      .catch((error) => {
        toast(error.massage);
      });
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon text-white"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav  mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/course">
                Course
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/faq">
                FAQ
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            <li className="nav-item nav-link">
              <img
                className={user ? "profileImg img-fluid" : "img-fluid"}
                src={user?.photoURL}
                alt=""
              />
            </li>
            {user?.uid ? (
              <div>
                <li
                  onClick={logOutUser}
                  className="nav-item logOutBtn nav-link mr-5"
                >
                  Logout
                </li>
              </div>
            ) : (
              <li className="nav-item mr-5">
                <Link className="nav-link" to="/user/login">
                  Login
                </Link>
              </li>
            )}

            {/* <li className="nav-item mx-5">
              <div className="checkbox">
                <label>
                  <input
                    type="checkbox"
                    checked
                    data-toggle="toggle"
                    data-on="Dark"
                    data-off="Light"
                    data-onstyle="dark"
                    data-offstyle="light"
                  />
                </label>
              </div>
            </li> */}
          </ul>
        </div>
      </nav>
      <ToastContainer />
    </div>
  );
};

export default Navbar;
