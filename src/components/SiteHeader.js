import React from 'react'
import axios from 'axios'
import {Layout, Typography} from 'antd'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined
} from '@ant-design/icons'
import { connect } from 'react-redux'
import {setKarma} from '../store/actions'

const {Text} = Typography
const {Header} = Layout

const APP_VERSION = "v0.1.3"

const SiteHeader = props => {

    return (
        <Header className="site-layout-header">
            {React.createElement(props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, { 
                className: 'trigger',
                onClick: props.toggle,
            })}
            {/* <div className="header-info"> */}
            <Text>Admin Pay Admin { APP_VERSION }</Text>
            <Text keyboard>Your Karma: {props.karma}</Text>
            {/* </div> */}
        </Header>
    )
}

const mapStateToProps = state => {
    return {
        karma: state.r1.karma
    }
}

export default connect(mapStateToProps, {setKarma})(SiteHeader)