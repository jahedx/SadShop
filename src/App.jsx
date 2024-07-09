import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  About,
  Cart,
  Error,
  Help,
  Landing,
  Login,
  Profile,
  Register,
  EditDetails,
  Test,
  SearchResult,
} from "./pages";
import SingleProduct from "./pages/SingleProduct.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/profile/editdetails",
        element: <EditDetails />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/test",
        element: <Test />,
      },
      {
        path: "/search",
        element: <SearchResult />,
      },
      {
        path: "/product/:productID",
        element: <SingleProduct />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
