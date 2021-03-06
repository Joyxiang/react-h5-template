import React, { Component } from 'react'
import Loadable from 'react-loadable'
import '../../service/wechat'

const LoadableImageComponent = Loadable({
  loader: () => import('../basic/image'),
  loading: () => <div>Loading...</div>
})

const LoadableButtonComponent = Loadable({
  loader: () => import('../basic/button'),
  loading: () => <div>Loading...</div>
})

const LoadableImageFunctionalComponent = Loadable({
  loader: () => import('../basic/imageFuctional'),
  loading: () => <div>Loading</div>
})

const ButtonComponent = context => <LoadableButtonComponent {...context} />

const ImageComponent = context => <LoadableImageComponent {...context} />

const ImageFunctionalComponent = context => (
  <LoadableImageFunctionalComponent {...context} />
)

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
        return <ButtonComponent key={index} {...context} />
      case 'ImageFunctional':
        return <ImageFunctionalComponent key={index} {...context} />
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
