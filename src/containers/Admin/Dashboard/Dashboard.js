import React, {Fragment} from 'react';
import WithDarkTheme from "../../../HOC/DarkTheme/DarkTheme";
import {withStyles} from "@material-ui/core";
import withPadding from "../../../HOC/WithPadding/WithPadding";
import Container from "../../../HOC/Container/Container";
import AkTabs from "../../../components/UI/Taps/Taps";
import './Dashboard.scss'
import Card from "@material-ui/core/Card/Card";
import Breadcrumbs from "../../../components/UI/Breadcrumbs/breadcrumbs";
import AdminProducts from "./AdminProducts/AdminProducts";

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    shadow: {
        boxShadow: theme.shadows[3]
    },
    pannerCont: {
        marginTop: '1rem'
    }
});

class Dashboard extends React.Component {
    render() {
        const {
            props: {
                classes
            }


        } = this;
        return (
            <Fragment>
                <Breadcrumbs/>
                <br/>
                <Container className="dashboard">
                    <Card>
                        <AkTabs
                            value={0}
                            toolbarClasses={["toolBar", classes.shadow]}
                            tab={[
                                {label: 'Orders'},
                                {label: 'Products'},
                                {label: 'Clients'},
                                {label: 'Statics'},
                            ]}
                        >
                            <div>Orders</div>
                            <div><AdminProducts/></div>
                            <div>Clients</div>
                            <div>Statics</div>
                            <div>Plans</div>
                            <div>issues</div>
                        </AkTabs>
                    </Card>
                </Container>
            </Fragment>

        )
    }
}

export default withStyles(styles)(withPadding(Dashboard));