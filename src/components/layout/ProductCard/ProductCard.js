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
import {PRODUCT_CARD_DETAILS} from "../../../dux/actions/actionTypes";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import ProductHeader from "../productDetails/ProdcutHeader/ProdcutHeader";
import Category from "../productDetails/category/category";

const styles = theme => ({
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
            position: 'relative',
            display: 'flex',
            justifyContent: 'center'
        },
        chip: {
            backgroundColor: '#FF1744',
            color: "#fff",
            fontWeight: "600",
            boxShadow: theme.shadows[1]
        }
    })
;


class ProductCard extends React.Component {


    openDetailes = (cardData) => {
        this.props.openProductDetails(cardData)
    }

    navigateToProductPage = (PId) => {
        if (!PId) return;
        this.props.history.push({
            pathname: `/products/${PId}`,
        })
    }


    render() {
        const {
            props: {
                classes,
                productImg,
                productName,
                productPrice,
                preDiscount,
                productCategory,
                productDescription,
                liked,
                id
            },
            openDetailes,
            navigateToProductPage,

        } = this;
        const priceRatio = preDiscount ? (100 - ((productPrice / preDiscount) * 100)).toFixed(2) : 0;

        return (
            <div className="productCardWrapper">
                <div className="productCard">
                    {(priceRatio > 0)
                    && <div className="pcChip">
                        <Chip className={classes.chip}
                              label={priceRatio + '% off'}
                        />
                    </div>
                    }
                    <Card>
                        <CardMedia
                            className={classes.media}
                            image={productImg || "//via.placeholder.com/300"}
                            title="Contemplative Reptile"
                        />
                        <CardHeader
                            className={classes.cardHeader}
                            classes={{
                                root: 'cardHeaderRoot'
                            }}
                            title={<ProductHeader productName={productName}/>}
                            subheader={<div><Category productCategory={productCategory}/></div>}
                            action={
                                <div className="viewDetailsB">
                                    <Tooltip title="quick view item denials" placement="bottom-start">
                                        <IconButton aria-label="quick view item denials" size="small" onClick={() => navigateToProductPage(id)}>
                                            <i className="material-icons">
                                                remove_red_eye
                                            </i>
                                        </IconButton>
                                    </Tooltip>
                                </div>
                            }
                        />
                        <div className="priceARate">
                            <Price
                                productPrice={productPrice}
                                preDiscount={preDiscount}
                                priceRatio={priceRatio}
                            />
                            <Rating
                            />
                        </div>
                        <Divider className={classes.divider}/>
                        <ProductActions openDetailes={() => openDetailes({
                                productImg,
                                productName,
                                productPrice,
                                preDiscount,
                                productCategory,
                                productDescription,
                                liked,
                                id
                            }
                        )} id={id}/>
                    </Card>
                </div>
            </div>


        )
    }

}

const mapDispachToProps = dispatch => {
    return {
        openProductDetails: (activeCard) => dispatch({
            type: PRODUCT_CARD_DETAILS, payload: {open: true, data: activeCard, component: 'ProductDetails'}
        })
    }
}

export default withRouter(connect(null, mapDispachToProps)(withStyles(styles)(ProductCard)));