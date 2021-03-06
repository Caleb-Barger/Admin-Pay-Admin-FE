import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import {addItemToCollection, setKarma, removeItemFromCollection} from '../store/actions'
import {axiosDownload} from '../utils/axiosDownload'
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
  
  const itemInCollection = () => props.collection.find(e => e === props.desc) ? true : false
  const hasEnoughKarma = () => props.karma > 0 ? true : false 

  useEffect(() => {
    if (!itemInCollection()) {
      return
    } 
    setLocalState({
      ...localState,
      activeAdd: true,
      activeRemove: false,
      favorite: true
    })
  }, [localState.favorite])

  const showModal = () => {
    setLocalState({
      ...localState,
      visible: true,
      activeAdd: hasEnoughKarma() && !itemInCollection() ? false : true 
    })
  }

  const handleOk = () => {
    if (!itemInCollection()) {
      props.collection.push(props.desc)
      props.setKarma(props.karma-1)
      props.addItemToCollection(props.collection)
      setLocalState({
        ...localState,
        activeAdd: !localState.activeAdd,
        activeRemove: !localState.activeRemove,
        favorite: true
      })
    } 
  };

  const handleRemove = () => {
    if (itemInCollection()) {
      props.collection.map((val, i) => {
        if (val == props.desc) delete props.collection[i] 
      })
    }
    setLocalState({
      ...localState,
      activeAdd: hasEnoughKarma() ? !localState.activeAdd : localState.activeAdd,
      favorite: false
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
            itemInCollection() ? <Button key="remove" disabled={localState.activeRemove} type="danger" onClick={handleRemove}>
              Remove from Collection
            </Button>: <></>,
            itemInCollection() ? <Button onClick={axiosDownload}>Test Download</Button>: <></>,
            !itemInCollection() ? <Button key="submit" disabled={localState.activeAdd} type="primary" onClick={handleOk}>
              Add to Collection
            </Button> : <></>
          ]}
        >
          <p>{props.desc}</p>
        </Modal>
      </>
    );
  }

const mapStateToProps = state => {
  return {
   collection: state.r1.collection,
   karma: state.r1.karma
  }
}

export default connect(mapStateToProps, { removeItemFromCollection,
  addItemToCollection, setKarma})(OpenModal)