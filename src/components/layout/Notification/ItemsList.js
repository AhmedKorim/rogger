import React, {Fragment} from 'react'
import PerfectScrollbar from "react-perfect-scrollbar";
import List from "@material-ui/core/List/List";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import ListItem from "@material-ui/core/ListItem/ListItem";
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Icon from "@material-ui/core/Icon/Icon";
import Divider from "@material-ui/core/Divider/Divider";
import {withRouter} from "react-router-dom";

const ItemsList = props => {
    let {listItems, message, deleteBtnclick, history: {push}} = props;
    return (
        <Fragment>
            {listItems.length > 0 ?
                <PerfectScrollbar>
                    <List component="ul" className="productsList">
                        {listItems.map((CartItem, index, array) => <Tooltip key={CartItem.id} title="more to page details" placement="bottom-end">
                                <Fragment>
                                    <ListItem component="li" button className="productsListItem" onClick={() => push('/products/' + CartItem.id)}>
                                        <Grid alignItems="center" container className="productItem" justify="center">
                                            <Grid container item xs={10}>
                                                <Grid container justify="center" alignItems="center">
                                                    <Grid item xs={4}>
                                                        <img src={CartItem.productImg} alt="productName"/>
                                                    </Grid>
                                                    <Grid item container alignItems="center" xs className="itemData">
                                                        <Grid xs={12} item className="cartItemheader">
                                                            <Typography variant="subheading" className="productTitle">
                                                                {CartItem.productName}
                                                            </Typography>
                                                        </Grid>
                                                        <Grid xs item className="cartItemPrice">
                                                            <Typography variant="subheading" className="productPrice">
                                                                {CartItem.productPrice}
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid xs={2} item container alignItems="center" justify="center">
                                                <div className="actionWrapper">
                                                    <div className="buttonFlooter">
                                                        <Tooltip title="remove item from the cart" placement="bottom-end">
                                                            <IconButton className="cartItemButton"
                                                                        onClick={(event) => (event.stopPropagation(), deleteBtnclick(CartItem.id))}>
                                                                <Icon>delete</Icon>
                                                            </IconButton>
                                                        </Tooltip>
                                                    </div>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </ListItem>
                                    {(array.length > 1 && index < array.length - 1) && <Divider className="divider"/>}
                                </Fragment>
                            </Tooltip>
                        )}
                    </List>
                </PerfectScrollbar> :
                <div className="message">
                    <div><Typography component="p" className="ELMessage" variant="subheading">{message}</Typography></div>
                </div>
            }
        </Fragment>

    )
};
export default withRouter(ItemsList);