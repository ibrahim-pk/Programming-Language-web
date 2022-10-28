import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Login from "./component/auth/Login";
import Register from "./component/auth/Register";
import Course from "./screen/course/Course";
import SingleCourse from "./screen/course/SingleCourse";
import Home from "./screen/home/Home";
import Checkout from "./screen/checkout/Checkout";
import BuySms from "./component/buyMsg/BuySms";
import PrivateRouter from "./component/router/PrivateRouter";
import Blog from "./screen/blog/Blog";
import Faq from "./screen/faq/Faq";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        loader: () =>
          fetch("https://server-ibrahimecste.vercel.app/api/course"),
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/course",
        loader: () =>
          fetch("https://server-ibrahimecste.vercel.app/api/course"),
        element: <Course />,
      },
      {
        path: "/course/:id",
        loader: ({ params }) =>
          fetch(
            `https://server-ibrahimecste.vercel.app/api/course/${params.id}`
          ),
        element: <SingleCourse />,
      },
      {
        path: "/user/login",
        element: <Login />,
      },
      {
        path: "/user/register",
        element: <Register />,
      },
      {
        path: "/course/checkout",
        element: (
          <PrivateRouter>
            <Checkout />
          </PrivateRouter>
        ),
      },
      {
        path: "/buy/success",
        element: <BuySms />,
      },
    ],
  },
  { path: "*", element: <h1 className="text-center mt-5">Not Found!</h1> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
