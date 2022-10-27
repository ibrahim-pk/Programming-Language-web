import React, { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  sendEmailVerification,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { AuthContext } from "../authProvider/AuthProvider";
const Register = () => {
  const { auth } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profileImg, setProfileImg] = useState("");

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        toast("Login Successfuly");
        navigate(from, { replace: true });
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast(errorMessage);
        // The email of the user's account used.
      });
  };
  const githubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        toast("Login Successfuly");
        navigate(from, { replace: true });
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast(errorMessage);
      });
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      alert("Min 6 digit");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateUserProfile();
        setName("");
        setEmail("");
        setPassword("");
        if (user.emailVerified) {
          toast("Login Successfuly");
          navigate(from, { replace: true });
        } else {
          sendEmailVerification(auth.currentUser).then(() => {
            toast("আপনার ই-মেইল ভেরিফাই করে পুনরায় লগ-ইন করুন");
          });
          navigate("/user/login");
        }
      })
      .catch((error) => {
        //const errorCode = error.code;
        const errorMessage = error.message;
        toast(errorMessage);
        // ..
      });
  };
  const updateUserProfile = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: profileImg,
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        toast(error.massage);
      });
  };
  return (
    <div className="container my-5">
      <div className="card p-4">
        <h4>Register Form</h4>
        <hr />
        <div className="card p-3">
          <form onSubmit={HandleSubmit}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control my-2"
              placeholder="Your Name"
              required
            />
            <input
              type="text"
              value={profileImg}
              onChange={(e) => setProfileImg(e.target.value)}
              className="form-control my-2"
              placeholder="Profile Url"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control my-2"
              placeholder="Email"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control my-2"
              placeholder="Password"
              required
            />
            <button className="form-control btn btn-info">Register</button>
            <ToastContainer />
          </form>
        </div>
        <div className="otherLoginSystem">
          <button
            onClick={googleSignIn}
            className=" my-2 form-control btn btn-primary"
          >
            Google
          </button>
          <button
            onClick={githubSignIn}
            className=" my-2 form-control btn btn-dark"
          >
            Github
          </button>
        </div>
      </div>
      <div className="text-center my-2">
        <small>
          Already Registed?{" "}
          <strong>
            <Link to="/user/login">Login</Link>
          </strong>
        </small>
      </div>
    </div>
  );
};

export default Register;
