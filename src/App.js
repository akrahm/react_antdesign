import './App.css';
import React from 'react';
import { Layout, Typography, Avatar, Menu, Breadcrumb } from 'antd';
import User from "./images/hacker.png";
import 'antd/dist/reset.css';
const { Title } = Typography;
const { Header, Footer, Sider, Content } = Layout;


function App() {

  let arr = [
    {
      key: '1',
      label: 'nav 1',
    },
    {
      key: '2',
      label: 'nav 2',
    },
    {
      key: '3',
      label: 'nav 3',
    },
    {
      key: '4',
      label: 'nav 4',
    },
    {
      key: '5',
      label: 'nav 5',
    },
    {
      key: '6',
      label: 'nav 6',
    },
  ]

  return (
    <div className="App">
      <Layout>
        <Header style={{padding: "10px"}}>
          <Avatar style={{ float: "right" }} src={User} />
        <Title style={{ color: "white" }} level={3}>visHAL</Title>
        </Header>
        <Layout>
          <Sider>
          <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={arr}
        />
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{backgroundColor:"#fff", margin: 0, padding: 24, height: "76vh"}}>Content</Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
          </Layout>
    </Layout>
    </div>
  );
}

export default App;
