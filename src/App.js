import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'
import {fetchPosts} from './store/actions'
import { Layout, Menu, Typography } from 'antd';
import './App.css';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  StarOutlined,
  EllipsisOutlined,
} from '@ant-design/icons';
import Post from './components/Post';
import { Spinner } from './components/Spinner'

const { Title } = Typography;
const { Header, Sider, Content } = Layout;
const APP_VERSION = 'v0.0.6'

const App = props => {

  const [collapsed, setCollapsed] = useState(true)

  const toggle = () => {
    setCollapsed(!collapsed)
  };

  // the collection is all items that hasSubscribed or something like ownend 
  // when this component mounts dispatch an action call that returns all items
    // in the background the action call will go through each item and add it to the collection
    //  if it sees that hasSubscribed/isOwned JSON property

    useEffect(() => {
      props.fetchPosts()
      console.log(props.isFetching)
    }, []) 

    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
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
          <Header className="site-layout-background" style={{ padding: "1rem"}}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
            <Title level={5}>Admin Pay Admin { APP_VERSION }</Title>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              padding: 12,
              minHeight: 280,
            }}
          >
              {/* {props.isFetching ? props.items.map((v, i) => {
                return <Post key={i} desc={v} />
              }) : <Spinner />} */}
              {props.items.map((v, i) => {
                return <Post key={i} desc={v} />
              })}
          </Content>
        </Layout>
      </Layout>
    );  
  }

const mapStateToProps = state => {
  return {
    collection: state.r1.collection,
    items: state.r1.items,
    isFetching: state.r1.isFetching,
    error: state.r1.error
  }
} 

export default connect(mapStateToProps, {fetchPosts})(App)