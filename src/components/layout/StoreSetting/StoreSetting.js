import React, {Fragment} from 'react'
import AKmenu from "../../UI/Menu/Menu";
import Grid from "@material-ui/core/Grid/Grid";
import ShoppingCart from "../Cart/Cart";
import UserWidget from "../UserWidget/UserWidget";

const StoreSetting = props => {

    return (
        <Fragment>
            <Grid item xs>
                <AKmenu
                    icon="account_circle"
                    count={0}
                    tip="account">
                    <UserWidget/>
                </AKmenu>
            </Grid>
            <Grid item xs>
                <AKmenu
                    listItems={["usd", 'euro']}
                    icon="attach_money"
                    count={0}
                    tip="currency">
                </AKmenu>
            </Grid>
            <Grid xs item>
                <AKmenu
                    listItems={["eng", 'fb', 'ar']}
                    icon="language"
                    count={0}
                    tip="language">
                </AKmenu>
            </Grid>
        </Fragment>

    )
}
export default StoreSetting