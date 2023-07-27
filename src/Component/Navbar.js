import React from "react";
import { Layout, theme } from "antd";

const { Content } = Layout;

const Navbar = ({children}) => {

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <Layout
          style={{
            padding: "24px 0",
            background: colorBgContainer,
          }}
        >
          <Content
            style={{
              padding: "0 24px",
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};
export default Navbar;
