import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Login from "./component/auth/Login";
import Register from "./component/auth/Register";
import Course from "./screen/course/Course";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/course",
        element: <Course />,
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
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
