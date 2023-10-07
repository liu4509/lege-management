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
  getItem("Page", "page", <DesktopOutlined />, [
    getItem("Page01", "/page/page01"),
    getItem("Page02", "/page/page02"),
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
  // 当前路由
  const location = useLocation();
  let currentPath: string = location.pathname;
  // menu 展开项的初始值
  let firstOpenKeys: string[] = [];
  const [openKeys, setOpenKeys] = useState<string[]>(firstOpenKeys);

  // 当路径是子项 默认打开展开项
  const findKey = (obj: { key: string }) => {
    return obj.key === currentPath;
  };
  for (let i = 0; i < items.length; i++) {
    if (
      items[i]!["children"] &&
      items[i]!["children"].length > 0 &&
      items[i]!["children"].find(findKey)
    ) {
      // 赋值数值 要具体到下标 难排查问题
      firstOpenKeys[0] = items[i]!.key as string;
    }
  }
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
