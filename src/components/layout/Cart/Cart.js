import React from 'react'
import './Cart.scss';
import Grid from "@material-ui/core/Grid/Grid";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Icon from "@material-ui/core/Icon/Icon";
import Typography from "@material-ui/core/Typography/Typography";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";

const ShoppingCart = props => {
    const {} = props;
    return (
        <div className="shoppingCart">
            <Grid alignItems="center" container className="cartItem">
                <Grid container item xs={10}>
                    <List component="ul" className="cartItemsList">
                        <Tooltip title="more to page details" placement="bottom-end">
                            <ListItem component="li" button className="cartListItem">
                                <Grid container justify="center" alignItems="center">
                                    <Grid item xs={4}>
                                        <img src="//via.placeholder.com/300" alt="productName"/>
                                    </Grid>
                                    <Grid item container alignItems="center" xs className="itemData">
                                        <Grid xs={12} item className="cartItemheader">
                                            <Typography variant="subheading" className="productTitle">
                                                product name
                                            </Typography>
                                        </Grid>
                                        <Grid xs item className="cartItemPrice">
                                            <Typography variant="subheading" className="productPrice">
                                                150$
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </ListItem>
                        </Tooltip>
                    </List>
                </Grid>
                <Grid xs={2} item container alignItems="center" justify="center">
                    <div>
                        <Tooltip title="remove item from the cart" placement="bottom-end">
                            <IconButton className="cartItemButton">
                                <Icon>delete</Icon>
                            </IconButton>
                        </Tooltip>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
export default ShoppingCart