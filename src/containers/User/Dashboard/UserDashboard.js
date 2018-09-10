import React, {Fragment} from 'react';
import Dashboard from "../../../components/layout/Dashboard/Dashboard";
import WithHeight from "../../../HOC/WithHeight";
import withPadding from "../../../HOC/WithPadding/WithPadding";
import UserCart from "../UserCart/UserCart";
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
                        {label: 'cart'},
                        {label: 'Orders'},
                        {label: 'wish list'},
                        {label: 'compared'},

                    ]}
                >
                    {/*                 <WithHeight maxHeight={headerHeight + 120}>
                        <div>profile</div>
                    </WithHeight>*/}
                    <WithHeight maxHeight={headerHeight + 120}>
                        <UserCart/>
                    </WithHeight>
                    <WithHeight maxHeight={headerHeight + 120}>
                        <div>Orders</div>
                    </WithHeight>
                    <WithHeight maxHeight={headerHeight + 120}>
                       <UserWishList/>
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