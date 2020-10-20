import React, { useEffect } from 'react'
import {Layout, Typography} from 'antd'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined
} from '@ant-design/icons'
import { connect } from 'react-redux'
import {setKarma} from '../store/actions'

const {Title, Text} = Typography
const {Header} = Layout

const APP_VERSION = "v0.1.1"

const SiteHeader = props => {

    useEffect(() => {
        props.setKarma(100)
    }, []) // for now pretend you have 100 karma to spend

    return (
        <Header className="site-layout-background" style={{ padding: "1rem"}}>
            {React.createElement(props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, { // TODO: fix React Strict Mode
                className: 'trigger',
                onClick: props.toggle,
            })}
        <Title level={5}>Admin Pay Admin { APP_VERSION }</Title>
        <Text>Your Karma: {props.karma}</Text>
        </Header>
    )
}

const mapStateToProps = state => {
    return {
        karma: state.r1.karmaCount
    }
}

export default connect(mapStateToProps, {setKarma})(SiteHeader)