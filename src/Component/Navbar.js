import React, { useState } from "react";
import { Layout, theme } from "antd";
import AppLabel from "./AppLabel";
import { Container } from "react-bootstrap";
import { Data } from "./AppData";
import AppForm from "./AppForm";
import AppAction from "./AppActions";

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
