import React, {Fragment} from 'react';
import {withStyles} from "@material-ui/core";
import withPadding from "../../../HOC/WithPadding/WithPadding";
import Container from "../../../HOC/Container/Container";
import AkTabs from "../../../components/UI/Taps/Taps";
import './Dashboard.scss'
import Card from "@material-ui/core/Card/Card";
import Breadcrumbs from "../../../components/UI/Breadcrumbs/breadcrumbs";
import AdminProducts from "./AdminProducts/AdminProducts";
import WithHeight from "../../../HOC/WithHeight";

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
                classes,
                headerHeight
            },
        } = this;
        console.log(headerHeight);
        return (

            <Fragment>
                <Breadcrumbs/>
                <Container className="dashboard">
                    <Card>
                        <AkTabs
                            withFap={[1,2,3,4]}
                            toolbarClasses={["toolBar", classes.shadow]}
                            tab={[
                                {label: 'Orders'},
                                {label: 'Products'},
                                {label: 'Clients'},
                                {label: 'Statics'},
                            ]}
                        >

                            <WithHeight maxHeight={headerHeight + 90}> <div>Orders</div></WithHeight>
                            <WithHeight maxHeight={headerHeight + 90}><AdminProducts/></WithHeight>
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