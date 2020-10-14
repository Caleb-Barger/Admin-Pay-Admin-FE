import React from 'react'
import { Modal } from 'antd';
import { StarTwoTone } from '@ant-design/icons'

const favoriteTone = "#FCBF30"
const regularTone = "#FEF2D6"

class OpenModal extends React.Component {
  state = { visible: false, favorite: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    this.setState({
      visible: false,
      favorite: true
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false,
      favorite: false
    });
  };

  // what buttons would I like to see on the card?
  // probably one to add to the collection

  render() {
    return (
      <>
        {/* <Button icon={<PlusCircleTwoTone />} onClick={this.showModal} /> */}
        <StarTwoTone twoToneColor={this.state.favorite ? favoriteTone : regularTone} onClick={this.showModal}/>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </>
    );
  }
}

export default OpenModal