import React, {useEffect} from 'react'
import {Layout } from 'antd'
import {
} from '@ant-design/icons'
import {connect} from 'react-redux'
import {fetchPosts} from '../store/actions'
import '../App.css'
import Post from './Post'

const {Content} = Layout

const Collection = props => {

    useEffect(() => {
      props.fetchPosts()
      console.log(props.isFetching)
    }, [])

    return (
      <Content
        className="site-layout-background"
        style={{
          padding: 12,
          minHeight: 280,
        }}
      >
        {props.collection.map((v, i) => {
          return <Post key={i} desc={v} />
        })}
      </Content>
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

export default connect(mapStateToProps, {fetchPosts})(Collection)