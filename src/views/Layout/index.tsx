import { Breadcrumb, Layout } from "antd";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import MianMenu from "@/components/MainMenu";

const { Header, Content, Footer, Sider } = Layout;

const Viwe: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  // const navigateTo = useNavigate();

  return (
    <Layout id="components-layout-demo-side" style={{ minHeight: "100vh" }}>
      {/* 左侧导航栏 */}
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo" />
        <MianMenu />
      </Sider>
      {/* 右侧内容 */}
      <Layout className="site-layout">
        {/* 头部 */}
        <Header
          className="site-layout-background"
          style={{ paddingLeft: "20px" }}
        >
          <Breadcrumb style={{ lineHeight: "64px" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
        </Header>
        {/* 内容 */}
        <Content
          style={{ margin: "16px 16px 0" }}
          className="site-layout-background"
        >
          <Outlet />
        </Content>
        {/* 底部 */}
        <Footer style={{ textAlign: "center", padding: 0, lineHeight: "48px" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Viwe;
