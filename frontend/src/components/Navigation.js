import React, {useState, useEffect} from 'react'
import {Layout, Menu } from 'antd'
import {
    StarOutlined,
    EllipsisOutlined,
} from '@ant-design/icons'
import {connect} from 'react-redux'
import {fetchPosts} from '../store/actions'
import '../App.css'
import SiteHeader from './SiteHeader'
import Collection from './Collection'
import Dashboard from './Dashboard'

const {Sider} = Layout

const Navigation = props => {
    const [collapsed, setCollapsed] = useState(true)
    const [view, setView] = useState(<Dashboard />)

    const toggle = () => {
        setCollapsed(!collapsed)
    }

    const navHandler = e => {
      console.log(e)
      switch(e.key) {
        case '1':
          setView(<Dashboard />)
          break
        case '2':
          setView(<Collection />)
          break
        default:
          setView(<Dashboard />)
      }
    }

    useEffect(() => {
      props.fetchPosts()
      console.log(props.isFetching)
    }, [])

    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
          <div className="logo" />
          <Menu theme="light" mode="inline" 
            defaultSelectedKeys={['1']}
            onClick={navHandler}>
            <Menu.Item 
              key="1" icon={<EllipsisOutlined />}
            >
              Dashboard
            </Menu.Item>
            <Menu.Item 
              key="2" icon={<StarOutlined />}
            >
              Collection
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
            <SiteHeader 
                toggle={toggle} collapsed={collapsed}
            />
            {view}
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

export default connect(mapStateToProps, {fetchPosts})(Navigation)