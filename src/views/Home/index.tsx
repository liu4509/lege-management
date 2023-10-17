import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  // 获取仓库信息
  const { num } = useSelector((state: RootState) => ({
    num: state.NumStatusReducer.num,
  }));
  const changeNum = () => {
    dispatch({ type: "add1" });
  };
  const changeNum100 = () => {
    dispatch({ type: "add2", val: 100 });
  };
  const changeNumAsync = () => {
    // 同步写法
    // dispatch({ type: "add2", val: 100 });
    // 异步写法
    dispatch((dis: Function) => {
      setTimeout(() => {
        dis({ type: "add3", val: 100 });
      }, 5000);
    });
  };
  return (
    <div className="home">
      <p>这是一个Home组件</p>
      <p>{num}</p>
      <button onClick={changeNum}>加1</button>
      <button onClick={changeNum100}>加100</button>
      <button onClick={changeNumAsync}>加100 异步执行</button>
    </div>
  );
};

export default Home;
