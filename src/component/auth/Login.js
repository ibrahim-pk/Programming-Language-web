import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../authProvider/AuthProvider";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

const Login = () => {
  const githubProvider = new GithubAuthProvider();
  const googleProvider = new GoogleAuthProvider();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { auth, setLoading } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  console.log(from);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        if (user.emailVerified) {
          toast("Login Successfuly");
          navigate(from, { replace: true });
        } else {
          sendEmailVerification(auth.currentUser).then(() => {
            toast("Go to Email and Verify");
          });
        }
      })
      .catch((error) => {
        //console.error(error);
        toast(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const googleSignIn = () => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        toast("লগ-ইন সম্পন্ন হয়েছে।");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast(errorMessage);
        // The email of the user's account used.
      });
  };
  const githubSignIn = () => {
    setLoading(true);
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        if (user.emailVerified) {
          toast("লগ-ইন সম্পন্ন হয়েছে।");
          navigate(from, { replace: true });
        } else {
          sendEmailVerification(auth.currentUser).then(() => {
            toast("আপনার ই-মেইল ভেরিফাই করে পুনরায় লগ-ইন করুন");
          });
        }
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast(errorMessage);
      });
  };
  return (
    <div className="container my-5">
      <div className="card p-4">
        <h3 className="my-2">Login Form</h3>
        <hr />
        <form onSubmit={handleSubmit}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control my-2"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control my-2"
            type="password"
            placeholder="Enter your password"
          />
          <button className=" my-2 form-control btn btn-info">Login</button>
          <ToastContainer />
        </form>
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
          New user?{" "}
          <strong>
            <Link to="/user/register">Register</Link>
          </strong>
        </small>
      </div>
    </div>
  );
};

export default Login;
