import React, { Component } from 'react'
import './App.css'
import 'normalize.css'
import Loading from './components/common/loading'
import Template from './components/main/template'

class App extends Component {
  constructor() {
    super()
    console.log('construct')
    this.state = {
      loading: true
    }
  }

  componentWillMount() {
    console.log('component will mount')
    setTimeout(() => {
      // here to get Data
      this.setState({
        loading: !this.state.loading
      })
    }, 2000)
  }

  componentDidMount() {
    // add track here
    console.log('component did mount')
  }

  render() {
    let loading = this.state.loading
    return loading ? <Loading /> : <Template />
  }
}

export default App
