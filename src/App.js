import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Login from "./component/auth/Login";
import Register from "./component/auth/Register";
import Course from "./screen/course/Course";
import SingleCourse from "./screen/course/SingleCourse";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        loader: () => fetch("http://localhost:5000/api/course"),
        element: <Course />,
      },
      {
        path: "/course",
        loader: () => fetch("http://localhost:5000/api/course"),
        element: <Course />,
      },
      {
        path: "/course/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/course/${params.id}`),
        element: <SingleCourse />,
      },
      {
        path: "/user/login",
        element: <Login />,
      },
      {
        path: "/user/login",
        element: <Login />,
      },
      {
        path: "/user/register",
        element: <Register />,
      },
    ],
  },
  { path: "*", element: <h1 className="text-center mt-5">Not Found!</h1> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
