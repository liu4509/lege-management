import { useRoutes } from "react-router-dom";
import router from "./router";

function App() {
  const outlet = useRoutes(router);
  return (
    <div className="App">
      {/* <Link to="/home">Home</Link> | <Link to="/about">About</Link> |
      <Link to="/user">User</Link> */}
      {outlet}
      {/* <Outlet></Outlet> */}
      {/* 顶级组件 */}
      {/* <Button>ddd</Button> */}
      {/* <UpCircleOutlined /> */}
    </div>
  );
}

export default App;
