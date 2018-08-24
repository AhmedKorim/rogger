import React from 'react'
import './productCard.scss';
import Card from "@material-ui/core/Card/Card";
import CardHeader from "@material-ui/core/CardHeader/CardHeader";
import IconButton from "@material-ui/core/IconButton/IconButton";
import {withStyles} from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import Divider from "@material-ui/core/Divider/Divider";
import Price from "../price/Price";
import ProductActions from "../productActions/ProdcutsAcitons";
import Chip from "@material-ui/core/Chip/Chip";
import Rating from "../Rateing/Rateing";
import {PRODCUT_CARD_DETIALSDETAILS} from "../../../dux/actions/uiActions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import ProductHeader from "../productDetails/ProdcutHeader/ProdcutHeader";
import Category from "../productDetails/category/category";

const styles = theme => {
        console.log(theme);
        return (
            {
                card: {
                    maxWidth: 400,
                },
                media: {
                    height: 0,
                    paddingTop: '90%', // 16:9
                },

                divider: {
                    width: "80%",
                    margin: 'auto'
                },
                cardHeader: {
                    textAlign: 'center',
                    position: 'relative'
                },
                chip: {
                    backgroundColor: '#FF1744',
                    color: "#fff",
                    fontWeight: "600",
                    boxShadow: theme.shadows[1]
                }
            });
    }
;


class ProductCard extends React.Component {
    openDetailes = () => {
        console.log('clicked');
        this.props.openProductDetails({})
    }

    navigateToProductPage = (PId) => {
        console.log(this.props);
        this.props.history.push({
            pathname: '/products/page',

        })
    }


    render() {
        const {
            props: {
                classes
            },

            openDetailes,
            navigateToProductPage

        } = this;
        return (

            <div className="productCardWrapper">
                <div className="productCard">
                    <div className="pcChip">
                        <Chip className={classes.chip}
                              label="15% off"
                        />
                    </div>
                    <Card>
                        <CardMedia
                            className={classes.media}
                            image="//via.placeholder.com/300"
                            title="Contemplative Reptile"
                        />
                        <CardHeader
                            className={classes.cardHeader}
                            title={<ProductHeader/>}
                            subheader={<Category/>}
                            action={
                                <div className="viewDetailsB">
                                    <Tooltip title="quick view item denials" placement="bottom-start">
                                        <IconButton aria-label="quick view item denials" size="small" onClick={() => navigateToProductPage()}>
                                            <i className="material-icons">
                                                remove_red_eye
                                            </i>
                                        </IconButton>
                                    </Tooltip>
                                </div>
                            }
                        />
                        <div className="priceARate">
                            <Price/>
                            <Rating/>
                        </div>
                        <Divider className={classes.divider}/>
                        <ProductActions openDetailes={openDetailes}/>
                    </Card>
                </div>
            </div>


        )
    }

}

const mapDispachToProps = dispatch => {
    return {
        openProductDetails: (activeCard) => dispatch({
            type: PRODCUT_CARD_DETIALSDETAILS, payload: {open: true, activeCard}
        })
    }
}

export default withRouter(connect(null, mapDispachToProps)(withStyles(styles)(ProductCard)));