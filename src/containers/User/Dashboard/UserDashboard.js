import React, {Fragment} from 'react';
import Dashboard from "../../../components/layout/Dashboard/Dashboard";
import WithHeight from "../../../HOC/WithHeight";
import withPadding from "../../../HOC/WithPadding/WithPadding";
import UserCart from "../UserCart/UserCart";
import ComparedList from "./CompareList/ComparedList";
import Orders from "./Orders/Orders";
import UserWishList from "./UserWishList/UserWishList";

class UserDashboard extends React.Component {
    render() {

        const {
            props: {
                headerHeight
            },
        } = this;

        return (
            <Fragment>
                <Dashboard
                    tabs={[
                        // {label: 'Profile'},
                        {label: 'check out'},
                        {label: 'Orders'},
                        {label: 'wish list'},
                        {label: 'compared'},
                    ]}
                >
                    <WithHeight maxHeight={headerHeight + 120}>
                        <UserCart/>
                    </WithHeight>
                    <WithHeight maxHeight={headerHeight + 120}>
                        <Orders/>
                    </WithHeight>
                    <WithHeight maxHeight={headerHeight + 120}>
                        <UserWishList/>
                    </WithHeight>
                    <WithHeight maxHeight={headerHeight + 120}>
                        <ComparedList/>
                    </WithHeight>
                </Dashboard>
            </Fragment>
        )
    }
}

export default withPadding(UserDashboard);