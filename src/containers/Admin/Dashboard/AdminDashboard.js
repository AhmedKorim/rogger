import React, {Fragment} from 'react';
import withPadding from "../../../HOC/WithPadding/WithPadding";
import './AdminDashboard.scss'
import AdminProducts from "./AdminProducts/AdminProducts";
import WithHeight from "../../../HOC/WithHeight";
import Dashboard from "../../../components/layout/Dashboard/Dashboard";

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
                <Dashboard
                    tabs={[
                        {label: 'Orders'},
                        {label: 'Products'},
                        {label: 'Clients'},
                        {label: 'Statics'},
                    ]}
                >
                    <WithHeight maxHeight={headerHeight + 90}>
                        <div>Orders</div>
                    </WithHeight>
                    <WithHeight maxHeight={headerHeight + 90}>
                        <AdminProducts/>
                    </WithHeight>
                    <div>Clients</div>
                    <div>Statics</div>
                    <div>Plans</div>
                    <div>issues</div>
                </Dashboard>
            </Fragment>
        )
    }
}

export default withPadding(AdminDashboard);