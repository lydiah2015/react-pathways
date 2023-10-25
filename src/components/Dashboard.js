import { Breadcrumb, Button, Form, Input, Layout, Menu, Modal, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { FormOutlined } from "@ant-design/icons"
import { Content, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import { Outlet, Link, useNavigate } from 'react-router-dom';

function Dashboard() {
  const [rights, setRights] = useState([{
    "right": "admin"
  }]);
  const navigate = useNavigate();

  useEffect(() => {

    // Fetch rights here
    // Simulate checking if user is logged in
    const data = localStorage.getItem("accessKey")
    console.log("This is local storage data ", data)
    if (!data) {
      navigate("/")
    }

  }, [])



  const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
  }));


  return (
    <div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "90%"
      }}>
        <h2>Rentals</h2>
        <div><Button type='primary' onClick={() => {
          // simulate log out
          localStorage.clear();
          navigate("/")
        }}>Logout</Button></div>
      </div>




      <Layout>
        {/* <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
      </Header> */}
        <Layout>
          <Sider
            width={200}
            style={{
              // background: "blue",
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100vh',
            }}
          >
            <Menu theme='dark' style={{
              marginTop: "40%",
            }}>
              <Menu.SubMenu title="System">
                <Menu.Item>
                  <Link to="/dashboard/roles">Roles</Link>
                </Menu.Item>
                <Menu.Item>
                  Users
                </Menu.Item>
              </Menu.SubMenu>
              <Menu.Item>
                System Handler
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout
            style={{
              padding: '0 24px 24px',
            }}
          >
            <Breadcrumb
              style={{
                margin: '16px 0',
              }}
            >
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              style={{
                padding: 24,
                margin: 0,
                // background: colorBgContainer,
              }}
            >
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </Layout>

    </div>
  );
}

export default Dashboard;