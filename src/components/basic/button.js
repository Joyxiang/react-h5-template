import React, { Component } from 'react'
class ComponentButton extends Component {
  constructor() {
    super()
    this.state = {
      isButtonPressed: false
    }
  }
  handleButtonTouchStart = () => {
    console.log('tourchstart')
    this.setState({
      isButtonPressed: true
    })
  }
  handleButtonTouchEnd = () => {
    console.log('tourchend')
    this.setState({
      isButtonPressed: false
    })
  }
  render() {
    let context = this.props
    let buttonConfig = {}
    buttonConfig.pressedImage = context.pressedImage || null
    let buttonInnerImg = {
      width: '100%'
    }
    return (
      <div
        onTouchStart={() => this.handleButtonTouchStart()}
        onTouchEnd={() => this.handleButtonTouchEnd()}
        style={context.style}
        alt={context.alt || ''}
      >
        {this.state.isButtonPressed === true ? (
          <img style={buttonInnerImg} src={context.defaultImage} alt="" />
        ) : (
          <img style={buttonInnerImg} src={context.touchedImage} alt="" />
        )}
      </div>
    )
  }
}
export default ComponentButton
