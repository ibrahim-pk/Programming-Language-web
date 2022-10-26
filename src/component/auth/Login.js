import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../authProvider/AuthProvider";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
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

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        if (user.emailVerified) {
          navigate(from, { replace: true });
        } else {
          toast(
            "Your email is not verified. Please verify your email address."
          );
        }
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const githubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast(errorMessage);
      });
  };
  return (
    <div className="container my-5">
      <div className="card p-2">
        <h3 className="my-2">Login Form</h3>
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
        <div className="text-center my-2">
          <small>
            New user?{" "}
            <strong>
              <Link to="/user/register">Register</Link>
            </strong>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Login;
