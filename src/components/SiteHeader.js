import React from 'react'
import {Layout, Typography} from 'antd'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined
} from '@ant-design/icons'

const {Title} = Typography
const {Header} = Layout

const SiteHeader = props => {
    return (
        <Header className="site-layout-background" style={{ padding: "1rem"}}>
            {React.createElement(props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, { // TODO: fix React Strict Mode
                className: 'trigger',
                onClick: props.toggle,
            })}
        <Title level={5}>Admin Pay Admin { props.APP_VERSION }</Title>
        </Header>
    )
}

export default SiteHeader