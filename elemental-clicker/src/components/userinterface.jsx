import React, { Component } from 'react';
import './userinterface.css'
import Background from './background'
import BuildingsBar from './buildingsBar'


import {
    ListItemText, ListItemIcon, ListItem, Divider, Typography,
    List, Toolbar, AppBar, CssBaseline, Drawer, Grid
} from '@material-ui/core';



    


class Userinterface extends Component {
    render() {
        return (
            <div className="userinterface">
                <header className="userinterface-header">
                    header
                </header>

                <body className="userinterface-body">
                    <Background onClick={this.props.click} />
                </body>

                
                <BuildingsBar />
                


                <footer className="userinterface-footer">
                    <div>
                        {this.props.score} {this.props.scorePerSecond}/s
                    </div>
                </footer>

            </div>
        )
    }



}

export default Userinterface