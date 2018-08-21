import React from 'react'
import {withStyles} from "@material-ui/core";
import Tab from "@material-ui/core/Tab/Tab";
import Tabs from "@material-ui/core/Tabs/Tabs";
import Paper from "@material-ui/core/Paper/Paper";

const styles = {
    root: {
        flexGrow: 1,
    },
};
const routering = ["home", "products", "offers"]

class Navigation extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        // routing here TODO
        this.setState({value});
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    {routering.map(route => <Tab label={route} key={route}/>)}
                </Tabs>
            </div>
        )
    }

}

export default withStyles(styles)(Navigation);