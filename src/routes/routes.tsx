import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AllSupply from "../components/ui/Dashboard/AllSupply";
import Chart from "../components/ui/Dashboard/Chart";
import CreateSupply from "../components/ui/Dashboard/CreateSupply";
import Dashboard from "../components/ui/layouts/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ReliefGoodDetails from "../pages/ReliefGoodDetails";
import ReliefGoods from "../pages/ReliefGoods";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/relief-goods",
        element: <ReliefGoods></ReliefGoods>,
      },
      {
        path: "/relief-goods/:id",
        element: <ReliefGoodDetails></ReliefGoodDetails>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        index: true,
        element: <Chart></Chart>,
      },
      {
        path: "create-supply",
        element: <CreateSupply></CreateSupply>,
      },
      {
        path: "supplies",
        element: <AllSupply></AllSupply>,
      },
    ],
  },
]);
