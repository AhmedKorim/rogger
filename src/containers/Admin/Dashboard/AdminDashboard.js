import React, {Fragment} from 'react';
import {withStyles} from "@material-ui/core";
import withPadding from "../../../HOC/WithPadding/WithPadding";
import Container from "../../../HOC/Container/Container";
import EnhancedTabs from "../../../components/UI/EnhancedTabs/EnhancedTabs";
import './AdminDashboard.scss'
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

class AdminDashboard extends React.Component {


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
                        <EnhancedTabs
                            tab={[
                                {label: 'Orders'},
                                {label: 'Products'},
                                {label: 'Clients'},
                                {label: 'Statics'},
                            ]}
                        >

                            <WithHeight maxHeight={headerHeight + 90}> <div>Orders</div></WithHeight>
                            <WithHeight maxHeight={headerHeight + 90}>
                                <AdminProducts/>
                            </WithHeight>
                            <div>Clients</div>
                            <div>Statics</div>
                            <div>Plans</div>
                            <div>issues</div>
                        </EnhancedTabs>
                    </Card>
                </Container>
            </Fragment>
        )
    }
}

export default withStyles(styles)(withPadding(AdminDashboard));