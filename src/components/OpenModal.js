import React, {useState} from 'react'
import { connect } from 'react-redux'
import {addItemToCollection} from '../store/actions'
import { Button, Modal } from 'antd';
import { StarTwoTone } from '@ant-design/icons'

const favoriteTone = "#FCBF30"
const regularTone = "#FEF2D6"

const OpenModal = props => {
  const [localState, setLocalState] = useState({
    visible: false,
    activeAdd: false,
    activeRemove: true,
    favorite: false
  })

  const showModal = () => {
    setLocalState({
      ...localState,
      visible: true
    })
  }

  const handleOk = () => {
    let isInCollection = props.collection.find(e => e === props.desc)
    if (!isInCollection) {
      props.collection.push(props.desc)
      props.addItemToCollection(props.collection)
      setLocalState({
        ...localState,
        favorite: true,
        activeAdd: !localState.activeAdd,
        activeRemove: !localState.activeRemove
      })
    } 
  };

  const handleRemove = e => {
    setLocalState({
      ...localState,
      visible: false // in the future this will dispatch a remove item call
    })
  }

  const handleCancel = e => {
    setLocalState({
      ...localState,
      visible: false
    })
  };

    return (
      <>
        <StarTwoTone twoToneColor={localState.favorite ? favoriteTone : regularTone} onClick={showModal}/>
        <Modal
          title="Add this item to Collection?"
          visible={localState.visible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button key="back" onClick={handleCancel}>
              Back
            </Button>,
            <Button key="remove" disabled={localState.activeRemove} type="danger" onClick={handleRemove}>
              Remove from Collection
            </Button>,
            <Button key="submit" disabled={localState.activeAdd} type="primary" onClick={handleOk}>
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
   collection: state.r1.collection
  }
}

export default connect(mapStateToProps, {addItemToCollection})(OpenModal)