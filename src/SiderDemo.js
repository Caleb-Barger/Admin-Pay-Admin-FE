import React from 'react';
import { Layout, Menu } from 'antd';
import './SiderDemo.css';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  StarOutlined,
  EllipsisOutlined,
} from '@ant-design/icons';
import Post from './components/Post';

const { Header, Sider, Content } = Layout;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  myArr = [1, 2, 3, 4, 5, 6]

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed} theme="light">
          <div className="logo" />
          <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<EllipsisOutlined />}>
              Dashboard
            </Menu.Item>
            <Menu.Item key="2" icon={<StarOutlined />}>
              Collection
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              padding: 12,
              minHeight: 280,
            }}
          >
              {this.myArr.map(i => {
                return (
                  <Post key={i} />
                )
              })}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo