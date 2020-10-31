import React, { Component } from 'react';
import Userinterface from './userinterface'


class GameHandler extends Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0,
      scorePerSecond: 10,
      scorePerClick: 1
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    const {score, scorePerSecond} = this.state;
    this.setState({
      score: score + scorePerSecond
    });
  }

  handleClick = () => {
    const {score, scorePerClick} = this.state;
    this.setState({
      score: score + scorePerClick
    })
  }


  render() {
    const {score, scorePerSecond} = this.state;
    return (
      <div className="GameHandler">
        <Userinterface score={score} scorePerSecond={scorePerSecond} click={this.handleClick} />
      </div>
    )

  }


}


export default GameHandler