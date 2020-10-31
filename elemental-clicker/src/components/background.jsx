import React, { Component } from 'react';
import artifact from '../images/artifact.gif'
import './background.css'


class Background extends Component {
    render() {
        return (
            <div className="Background" onClick={this.props.onClick}>
                <img className="Artifact" src={artifact} alt="" />
            </div>
        )

    }
}

export default Background