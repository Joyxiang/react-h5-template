import React, { Component } from 'react'
class ComponentImage extends Component {
  render() {
    let context = this.props
    return (
      <img src={context.src} style={context.style} alt={context.alt || ''} />
    )
  }
}
export default ComponentImage
