import React, {Fragment} from 'react';
import Dashboard from "../../../components/layout/Dashboard/Dashboard";
import WithHeight from "../../../HOC/WithHeight";
import withPadding from "../../../HOC/WithPadding/WithPadding";
import UserCart from "../UserCart/UserCart";

class UserDashboard extends React.Component {
    render() {

        const {
            props: {
                classes,
                headerHeight
            },
        } = this;

        return (
            <Fragment>
                <Dashboard
                    tabs={[
                        {label: 'Profile'},
                        {label: 'cart'},
                        {label: 'Orders'},
                        {label: 'wish list'},
                        {label: 'compared'},

                    ]}
                >
                    <WithHeight maxHeight={headerHeight + 120}>
                        <div>profile</div>
                    </WithHeight>
                    <WithHeight maxHeight={headerHeight + 120}>
                        <UserCart/>
                    </WithHeight>
                    <WithHeight maxHeight={headerHeight + 120}>
                        <div>Orders</div>
                    </WithHeight>
                    <WithHeight maxHeight={headerHeight + 120}>
                        <div>wish list</div>
                    </WithHeight>
                    <WithHeight maxHeight={headerHeight + 120}>
                        <div>compared</div>
                    </WithHeight>
                </Dashboard>
            </Fragment>
        )
    }
}

export default withPadding(UserDashboard);