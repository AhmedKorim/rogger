import React, {Fragment} from 'react';
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Tabs from "@material-ui/core/Tabs/Tabs";
import Tab from "@material-ui/core/Tab/Tab";
import SwipeableViews from "react-swipeable-views";
import {withRouter} from 'react-router-dom';
import {withWidth} from "@material-ui/core";

class AkTabs extends React.Component {
    constructor(props) {
        super(props);
        const links = props.location.pathname.split('/');
        const intialIndex = props.tab.findIndex(item => item.label === links[links.length - 1]);
        console.log(props.tab, links, intialIndex);
        this.state = {
            value: intialIndex > 0 ? intialIndex : (props.history.push(props.match.url + '/' + props.tab[0].label), 0)

        }
    }

    handleChange = (event, value) => {
        this.setState({value})
        this.props.history.push(this.props.match.url + '/' + this.props.tab[value].label);
    };
    handleChangeIndex = index => {
        this.setState({value: index});
    };

    componentWillUpdate(nextProps, nextState) {
        if (nextProps.location.pathname === this.props.location.pathname) return;
        const links = nextProps.location.pathname.split('/');
        const intialIndex = nextProps.tab.findIndex(item => item.label === links[links.length - 1]);
        if (intialIndex > -1) {
            this.setState({value: intialIndex})
            return;
        }
        console.log('ok' , this.props);
    }

    render() {
        const {
            state: {
                value
            },
            props: {
                children,
                toolbarClasses,
                tab,
                centered,
                width
            },
            handleChange,
            handleChangeIndex
        } = this;

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


export default withRouter(withWidth()(AkTabs));