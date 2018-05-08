import React, { Component } from 'react'
class Template extends Component {
  constructor() {
    super()
    this.state = {}
  }

  renderComponent(config) {
    switch (config.type) {
      case 'button':
        return <div>button</div>
        break
    }
  }

  componentWillMount() {}

  componentDidMount() {}

  render() {
    console.dir(this.props)
    const displayTheme = this.props.type || 'flex-mid'
    const { components } = this.props
    // return (
    //   <div className={displayTheme}>
    //     {allComponents.map((config, index) => this.renderComponent(config))}
    //   </div>
    // )
    return null
  }
}
export default Template
