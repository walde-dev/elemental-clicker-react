import React, { Component } from 'react';

import {
    withStyles,
} from '@material-ui/core/styles';

import {
    Drawer, Grid,
} from '@material-ui/core';


const styles = (theme => ({
    ShopDrawer: {
        color: "white",
        backgroundColor: "#191970",
        borderLeft: "1vh solid white",
        padding: "20px",
        minHeight: "100vh"
    },
    Building: {
        border: "5px solid white",
        padding: "20px"
    }
}));


class BuildingsBar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }



    render() {
        const { classes } = this.props;
        return (
            <Drawer 
                variant="permanent"
                anchor="right"
            >
            
                <Grid className={classes.ShopDrawer}>
                    <Grid className={classes.Building}>
                        FARM
                        10
                        200
                    </Grid>
                    <Grid className={classes.Building}>
                        INN
                    </Grid>
                    <Grid className={classes.Building}>
                        BLACKSMITH
                    </Grid>
                    <Grid className={classes.Building}>
                        TOWNHALL
                    </Grid>
                </Grid>
            </Drawer>
        )



    }
}

export default withStyles(styles)(BuildingsBar);