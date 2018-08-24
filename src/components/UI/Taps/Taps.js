import React, {Fragment} from 'react';
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Tabs from "@material-ui/core/Tabs/Tabs";
import Tab from "@material-ui/core/Tab/Tab";
import SwipeableViews from "react-swipeable-views";


class AkTabs extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            value : props.value || 0
        }
    }
    handleChange = (event, value) => {
        this.setState({value})
    };
    handleChangeIndex = index => {
        this.setState({value: index});
    };
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
                        centered={centered}>
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


export default AkTabs;