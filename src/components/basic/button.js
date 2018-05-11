import React, { Component } from 'react'
class ComponentButton extends Component {
  constructor() {
    super()
    this.state = {
      isButtonPressed: false
    }
  }
  render() {
    let context = this.props
    let buttonConfig = {}
    buttonConfig.pressedImage = context.pressedImage || null
    return <button style={context.style} alt={context.alt || ''} />
  }
}
export default ComponentButton
