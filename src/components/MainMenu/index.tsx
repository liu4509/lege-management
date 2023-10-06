import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu, type MenuProps } from "antd";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Home", "/home", <TeamOutlined />),
  getItem("About", "/about", <PieChartOutlined />),
  getItem("User", "/user", <UserOutlined />),
  getItem("User", "page1", <DesktopOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "page2", <TeamOutlined />, [
    getItem("Team 1", "66"),
    getItem("Team 2", "88"),
  ]),
  getItem("Team", "page3", <TeamOutlined />, [
    getItem("Team 1", "99"),
    getItem("Team 2", "87"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

const Viwe: React.FC = () => {
  const navigateTo = useNavigate();
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  // 当前路由
  const location = useLocation();
  const currentPath = location.pathname;

  // 点击跳转路由 编程式导航跳转 hook
  const menuClick = (e: { key: string }) => {
    navigateTo(e.key);
  };

  // SubMenu 展开/关闭的回调
  const handleOpenChang = (keys: string[]) => {
    // 只显示当前点击的 items 其余 items 关闭
    setOpenKeys([keys[keys.length - 1]]);
  };

  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={[currentPath]}
      mode="inline"
      items={items}
      openKeys={openKeys}
      onClick={menuClick}
      onOpenChange={handleOpenChang}
    />
  );
};
export default Viwe;
