import React from "react";
import { Layout } from "antd";
import Nav from "./Nav";
import "../styles/game.css";

const { Header, Content, Footer } = Layout;

const MainLayout = ({ children }) => {
  return (
    <Layout className="MainLayout">
      <Header
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%" /*height:'5.75em ' */,
        }}
      >
        <Nav />
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        <div className="site-layout-content">{children}</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Well Done Kids
      </Footer>
    </Layout>
  );
};
export default MainLayout;
