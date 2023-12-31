import { Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import Login from "@/views/Login";

// 路由懒加载
const About = lazy(() => import("../views/About"));
const Home = lazy(() => import("../views/Home"));
const User = lazy(() => import("../views/User"));
const Layout = lazy(() => import("../views/Layout"));
const Page01 = lazy(() => import("../views/Page01"));
const Page02 = lazy(() => import("../views/Page02"));

// 抽离 loading
const withLoadingComponent = (com: JSX.Element) => (
  <Suspense fallback={<div>Loading...</div>}>{com}</Suspense>
);

const router = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: withLoadingComponent(<Home />),
      },
      {
        path: "/about",
        element: withLoadingComponent(<About />),
      },
      {
        path: "/user",
        element: withLoadingComponent(<User />),
      },
      {
        path: "/page/page01",
        element: withLoadingComponent(<Page01 />),
      },
      {
        path: "/page/page02",
        element: withLoadingComponent(<Page02 />),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <Navigate to="/home" />,
  },
];
export default router;
