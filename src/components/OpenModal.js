import React, {useState} from 'react'
import { connect } from 'react-redux'
import {addItemToCollection} from '../store/actions'
import { Button, Modal } from 'antd';
import { StarTwoTone } from '@ant-design/icons'

const favoriteTone = "#FCBF30"
const regularTone = "#FEF2D6"

const OpenModal = props => {
    // favorite: false, // this will get passed down through post

  const [visible, setVisible] = useState(false)
  const favorite = true // TEMPORARY!

  const showModal = () => {
    setVisible(true)
  }

  const handleOk = () => {
    props.addItemToCollection(props.desc)
    setVisible(false)
  };

  const handleRemove = e => {
    setVisible(false) // in the future this will dispatch a remove call 
  }

  const handleCancel = e => {
    setVisible(false)
  };

    return (
      <>
        <StarTwoTone twoToneColor={favorite ? favoriteTone : regularTone} onClick={showModal}/>
        <Modal
          title="Add this item to Collection?"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button key="back" onClick={handleCancel}>
              Back
            </Button>,
            <Button key="remove" onClick={handleRemove}>
              Remove from Collection
            </Button>,
            <Button key="submit" loading={props.isFetching} onClick={handleOk}>
              Add to Collection
            </Button>
          ]}
        >
          <p>{props.desc}</p>
        </Modal>
      </>
    );
  }

const mapStateToProps = state => {
  return {
   isFetching: state.r1.isFetching 
  }
}

export default connect(mapStateToProps, {addItemToCollection})(OpenModal)