import React, { Component } from 'react'
import Loadable from 'react-loadable'

const LoadableImageComponent = Loadable({
  loader: () => import('../basic/image'),
  loading: () => <div>Loading...</div>
})

const ImageComponent = context => <LoadableImageComponent {...context} />

class Template extends Component {
  constructor() {
    super()
    this.state = {}
  }

  renderComponent(context, index) {
    switch (context.type) {
      case 'Image':
        return <ImageComponent key={index} {...context} />
      case 'Button':
        return null
      default:
        return null
    }
  }

  componentWillMount() {}

  componentDidMount() {}

  render() {
    const type = this.props.type || 'flex-mid'
    const style = this.props.style || {}
    const { components } = this.props
    let defaultStyle = {
      height: window.innerHeight + 'px',
      width: '100%',
      overflow: 'hidden'
    }
    defaultStyle = Object.assign(defaultStyle, style)
    const allComponents = components.map((context, index) => {
      return this.renderComponent(context, index)
    })
    return (
      <div className={type} style={defaultStyle}>
        {allComponents}
      </div>
    )
  }
}
export default Template
