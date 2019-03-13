import React, { Component } from 'react'


class SimpleComponent extends Component {

  constructor() {
    super()
    this.state = {mood: 'happy'}
  }

  handleClick = () => {
    let m
    this.state.mood === 'happy' ? m = 'sad' : m = 'happy'
    this.setState({
      mood: m
    })
  }

  render() {
    return (
      <div
        onClick={this.handleClick}
      >{this.state.mood}</div>
    )
  }
}

export default SimpleComponent
