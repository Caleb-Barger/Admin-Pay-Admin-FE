import React from 'react'
import { Button, Modal } from 'antd';
import { StarTwoTone } from '@ant-design/icons'

const favoriteTone = "#FCBF30"
const regularTone = "#FEF2D6"

class OpenModal extends React.Component {
  state = { 
    visible: false, 
    favorite: false,
    loading: false  
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    this.setState({ loading: true })
    setTimeout(() => {
      this.setState({ loading: false, visible: false, favorite: true})
    }, 3000) // simulating an axios call <----
  };

  handleRemove = e => {
    this.setState({ visible: false, favorite: false, loading: false})
  }

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
        <StarTwoTone twoToneColor={this.state.favorite ? favoriteTone : regularTone} onClick={this.showModal}/>
        <Modal
          title="Add this item to Collection?"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Back
            </Button>,
            <Button key="remove" onClick={this.handleRemove}>
              Remove from Collection
            </Button>,
            <Button key="submit" loading={this.state.loading} onClick={this.handleOk}>
              Add to Collection
            </Button>
          ]}
        >
          {/* Description will go here */}
          <p>{this.props.desc}</p>
          <p></p>
        </Modal>
      </>
    );
  }
}

export default OpenModal