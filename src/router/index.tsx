import { Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";

// 路由懒加载
const About = lazy(() => import("../views/About"));
const Home = lazy(() => import("../views/Home"));
const User = lazy(() => import("../views/User"));
const Layout = lazy(() => import("../views/Layout"));

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
    ],
  },
];
export default router;
