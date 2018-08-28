import React, {Fragment} from 'react';
import EnhancedTabs from "../../UI/EnhancedTabs/EnhancedTabs";
import Breadcrumbs from "../../UI/Breadcrumbs/breadcrumbs";
import Container from "../../../HOC/Container/Container";
import Card from "@material-ui/core/Card/Card";
import WithHeight from "../../../HOC/WithHeight";
import AdminProducts from "../../../containers/Admin/Dashboard/AdminProducts/AdminProducts";
import {withStyles} from "@material-ui/core";
import withPadding from "../../../HOC/WithPadding/WithPadding";
import './Dashboard.scss';

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
                headerHeight,
                tabs,
                children
            },
        } = this;

        return (
            <Fragment>
                <Breadcrumbs/>
                <Container className="dashboard">
                    <Card>
                        <EnhancedTabs
                            tab={tabs}
                        >
                            {children}
                        </EnhancedTabs>
                    </Card>
                </Container>
            </Fragment>
        )
    }
}

export default withStyles(styles)(Dashboard);
