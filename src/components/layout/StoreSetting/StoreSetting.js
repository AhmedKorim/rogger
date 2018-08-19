import React, {Fragment} from 'react'
import AKmenu from "../../UI/Menu/Menu";
import Grid from "@material-ui/core/Grid/Grid";

const StoreSetting = props => {
    return (
        <Fragment>
            <Grid item>
                <AKmenu
                    listItems={["usd", 'euro']}
                    icon="attach_money"
                    count={0}
                    bLabel="currency">
                </AKmenu>
            </Grid> <Grid item>
                <AKmenu
                    listItems={["eng", 'fb','ar']}
                    icon="language"
                    count={0}
                    bLabel="language">
                </AKmenu>
            </Grid>
        </Fragment>

    )
}
export default StoreSetting