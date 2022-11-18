import './App.css';
import React from 'react';
import { Layout, Typography, Avatar, Menu, Breadcrumb } from 'antd';
import User from "./images/hacker.png";
import ReactImg from "./images/react.png";
import Angular from "./images/angular.png";
import Mui from "./images/mui.png";
import Vue from "./images/vue.jpeg";
import 'antd/dist/reset.css';
import CardItem from './components/Card';


function App() {

const { Title } = Typography;
const { Header, Footer, Sider, Content } = Layout;

  let arr = [
    {
      key: 'Dashboard',
      label: 'Dashboard',
    },
    {
      key: 'Languages',
      label: 'Languages',
    },
    {
      key: 'Frameworks',
      label: 'Frameworks',
    },
    {
      key: 'Source',
      label: 'Source',
    },
  ];

  const ItemList = [
    {
      id: "1",
      img: ReactImg,
      title: "ReactJS Library",
      avatar: "https://joeschmoe.io/api/v1/random",
      desc:"A JavaScript library for building user interfaces"
    },
    {
      id: "2",
      img: Angular,
      title: "Angular",
      avatar: "https://joeschmoe.io/api/v1/random",
      desc:"The modern web developer's platform"
    },
    {
      id: "3",
      img: Vue,
      title: "VueJS",
      avatar: "https://joeschmoe.io/api/v1/random",
      desc:"An approachable, performant and versatile framework for building web user interfaces."
    },
    {
      id: "4",
      img: Mui,
      title: "Material UI",
      avatar: "https://joeschmoe.io/api/v1/random",
      desc:"Move faster with intuitive React UI tools"
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
          defaultSelectedKeys={['Dashboard']}
          items={arr}
        />
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              <Breadcrumb.Item>Blogs</Breadcrumb.Item>
              <Breadcrumb.Item>Users</Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{ backgroundColor: "#fff", margin: 0, padding: 24, height: "76vh" }}>
              <Title level={2}>Dashboard</Title>
              <div style={{display:"flex"}}>
                <CardItem data={ItemList} />
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
          </Layout>
    </Layout>
    </div>
  );
}

export default App;
