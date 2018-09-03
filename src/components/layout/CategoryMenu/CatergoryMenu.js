import React from 'react'
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import HoverMenu from "../../UI/HoverMenu/HoverMenu";
import {withStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid/Grid";

const categories = [
    {
        closes: [
            {men: ['lorem', 'lorem', 'lorem', 'lorem', 'lorem']},
            {women: ['lorem', 'lorem', 'lorem', 'lorem', 'lorem']},
            {kids: ['lorem', 'lorem', 'lorem', 'lorem', 'lorem']},
        ]
    }, {
        electronics: [
            {houseGadgets: ['lorem', 'lorem', 'lorem', 'lorem', 'lorem']},
            {phones: ['lorem', 'lorem', 'lorem', 'lorem', 'lorem']},
            {laptops: ['lorem', 'lorem', 'lorem', 'lorem', 'lorem']},
        ]
    }, {
        music: [
            {gaz: ['lorem', 'lorem', 'lorem', 'lorem', 'lorem']},
            {electronic: ['lorem', 'lorem', 'lorem', 'lorem', 'lorem']},
            {metal: ['lorem', 'lorem', 'lorem', 'lorem', 'lorem']},
        ]
    }, {
        furniture: [
            {classic: ['lorem', 'lorem', 'lorem', 'lorem', 'lorem']},
            {metal: ['lorem', 'lorem', 'lorem', 'lorem', 'lorem']},
            {modern: ['lorem', 'lorem', 'lorem', 'lorem', 'lorem']},
        ]
    }, {
        jewellery: [
            {gold: ['lorem', 'lorem', 'lorem', 'lorem', 'lorem']},
            {gem: ['lorem', 'lorem', 'lorem', 'lorem', 'lorem']},
            {modern: ['lorem', 'lorem', 'lorem', 'lorem', 'lorem']},
        ]
    }
]
const styles = theme => ({
    Toolbar: {
        backgroundColor: theme.palette.background.default,
        minHeight: 'unset',
        height:50
    },
    listContaienr: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },

})
const CategoriseMenu = props => {

    const {classes} = props;
    return (
        <div>
            <Toolbar className={[classes.Toolbar , 'onStateBar'].join(' ')}>
                <div className="container">
                    <Grid container justify="center" alignItems="center">
                        {categories.map(item => {
                            const key = Object.keys(item)[0];
                            return <Grid key={key} item>
                                <HoverMenu
                                    label={key}
                                    items={item[key]}
                                >
                                </HoverMenu>
                            </Grid>
                        })}
                    </Grid>
                </div>
            </Toolbar>
        </div>
    )
}
export default withStyles(styles)(CategoriseMenu);