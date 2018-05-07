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
    const displayTheme = this.props.style.displaytheme || 'flex-mid'
    const { allComponents } = this.props
    return (
      <div className={displayTheme}>
        {allComponents.map((config, index) => this.renderComponent(config))}
      </div>
    )
  }
}
export default Template
