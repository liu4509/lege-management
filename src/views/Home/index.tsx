import { useSelector } from "react-redux";

const Home = () => {
  // 获取仓库信息
  const { num } = useSelector((state: RootState) => ({
    num: state.num,
  }));

  return (
    <div className="home">
      <p>这是一个Home组件</p>
      <p>{num}</p>
    </div>
  );
};

export default Home;
