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
        let activePassname = props.location.pathname.split('/')[1];
        this.state = {
            value: routering.indexOf(activePassname) > -1 ? routering.indexOf(activePassname) : 0,
        }

    }

    componentWillUpdate(nextProps, State) {
        const nextPathname = nextProps.location.pathname.split('/')[1];
        const Pathname = this.props.location.pathname.split('/')[1];
        if (nextPathname === Pathname) return;
        console.log(nextPathname.slice(1, nextPathname.length));
        this.setState({value: routering.indexOf(nextPathname)})
    }

    handleChange = (event, value) => {
        this.props.history.push(`/${routering[value]}`)
        this.setState({value});
    }


    render() {

        const {
            classes,
            rootClass,
            indercatorClass,
            selected,
            tabRootClass

        } = this.props;
        return (
            <div className={classes.root}>
                <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                    classes={{
                        root: rootClass,
                        indicator: indercatorClass
                    }}
                >
                    {routering.map(route => <Tab label={route} key={route} classes={{
                        root: tabRootClass,
                        selected: selected
                    }}/>)}
                </Tabs>
            </div>
        )
    }

}

export default withStyles(styles)(withRouter(Navigation));