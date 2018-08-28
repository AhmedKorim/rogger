import React from 'react';
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";

import './UserCart.scss'
class UserCart extends React.Component {
    render() {
        return (
            <div className="userCart">
                <Grid container justify="center" alignItems="flex-start">
                    <Grid item container xs sm={10} justify="flex-start" alignItems="center">
                        <Grid item xs={12}>
                            <Typography  className="header" variant="subheading" component="h3">My cart</Typography>
                        </Grid>
                        <Grid item container xs={11}>
                            <Grid item xs={12}>
                                <Typography variant="subheading" className="summery" component="p" >
                                   you have  <span className="cartcount">5</span> items on your cart
                                    that casts <span className="priceToPay">150$</span> adn you have saved  <span className="savedPrice">32$</span>
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>

                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </div>
        )
    }
}

export default UserCart;