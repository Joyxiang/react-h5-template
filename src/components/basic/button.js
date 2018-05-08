import React, { Component } from 'react'
class ComponentButton extends Component {
  render() {
    let context = this.props
    return <button style={context.style} alt={context.alt || ''} />
  }
}
export default ComponentButton
