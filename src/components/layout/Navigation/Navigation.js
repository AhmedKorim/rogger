import React from 'react'
import {withStyles} from "@material-ui/core";
import Tab from "@material-ui/core/Tab/Tab";
import Tabs from "@material-ui/core/Tabs/Tabs";
import {withRouter} from "react-router-dom";

const styles = {
    root: {
        flexGrow: 1,
    },
};
const routering = ["home", "products", "dashboard"]

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        let activePassname = this.props.location.pathname;
        activePassname = activePassname.slice(1, activePassname.length);

        this.state = {
            value: routering.indexOf(activePassname) > -1 ? routering.indexOf(activePassname) : 0,
        }

    }


    handleChange = (event, value) => {

        this.props.history.push(`/${routering[value]}`)
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

export default withRouter(withStyles(styles)(Navigation));