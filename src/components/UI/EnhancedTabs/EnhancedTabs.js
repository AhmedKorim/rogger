import React, {Fragment} from 'react';
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Tabs from "@material-ui/core/Tabs/Tabs";
import Tab from "@material-ui/core/Tab/Tab";
import SwipeableViews from "react-swipeable-views";
import {withRouter} from 'react-router-dom';
import {withStyles, withWidth} from "@material-ui/core";

const styles = theme => ({
    shadow: {
        boxShadow: theme.shadows[3],
        maxHeight: 48,
        minHeight: 'unset',
        display: 'flex',
        justifyContent: 'center'
    },
})

class EnhancedTabs extends React.Component {
    constructor(props) {
        super(props);
        if (!props.disableRouting) {
            const links = props.location.pathname.split('/');
            const intialIndex = props.tab.findIndex(item => item.label === links[links.length - 1]);
            console.log(props.tab, links, intialIndex, props.match.url);
            this.state = {
                value: intialIndex > 0 ? intialIndex : (props.history.push((props.match.url !== "/" ? props.match.url : props.location.pathname) + '/' + props.tab[0].label), 0)

            }
        } else {
            this.state = {
                value: 0
            }
        }
    }


handleChange = (event, value) => {
    this.setState({value})
    if(this.props.disableRouting) return;
    this.props.history.push((this.props.match.url !== "/" ? this.props.match.url : this.props.location.pathname) + '/' + this.props.tab[value].label);
};
handleChangeIndex = index => {
    this.setState({value: index});
};

componentWillUpdate(nextProps, nextState) {
    if(this.props.disableRouting) return;
    if (nextProps.location.pathname === this.props.location.pathname) return;
    const links = nextProps.location.pathname.split('/');
    const intialIndex = nextProps.tab.findIndex(item => item.label === links[links.length - 1]);
    if (intialIndex > -1) {
        this.setState({value: intialIndex})
        return;
    }
}

render()
{
    let {
        state: {
            value
        },
        props: {
            children,
            toolbarClasses,
            tab,
            classes,
            centered,
            width,
            withFap
        },
        handleChange,
        handleChangeIndex

    } = this;
    toolbarClasses = toolbarClasses || [classes.shadow, "toolBar"];
    return (
        <Fragment>
            <Toolbar className={toolbarClasses.join(' ')}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    scrollable={width === 'xs'}
                    scrollButtons="auto"
                    centered={false}>
                    >
                    {tab.map(tab => <Tab label={tab.label} key={tab.key}/>)}
                </Tabs>
            </Toolbar>
            <SwipeableViews
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                {children}
            </SwipeableViews>
        </Fragment>
    )
}
}


export default withRouter(withWidth()(withStyles(styles)(EnhancedTabs)));