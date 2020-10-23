import React from 'react'
import {Layout, Typography} from 'antd'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined
} from '@ant-design/icons'
import { connect } from 'react-redux'
import {setKarma} from '../store/actions'

const {Text} = Typography
const {Header} = Layout

const APP_VERSION = "v0.1.4"

const SiteHeader = props => {

    return (
        <Header className="site-layout-header">
            {React.createElement(props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, { 
                className: 'trigger',
                onClick: props.toggle,
            })}
            <Text>Admin Pay Admin { APP_VERSION }</Text>
            <Text keyboard>Your Karma: {props.karma}</Text>
        </Header>
    )
}

const mapStateToProps = state => {
    return {
        karma: state.r1.karma
    }
}

export default connect(mapStateToProps, {setKarma})(SiteHeader)