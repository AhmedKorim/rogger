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
import Rating from "../rateing/Rateing";
import ProductActions from "../productActions/ProdcutsAcitons";
import Chip from "@material-ui/core/Chip/Chip";

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

    render() {
        const {
            props: {
                classes
            },

        } = this;
        return (
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
                        title={"Product name"}
                        subheader={"electronics"}
                        action={
                            <div className="viewDetailsB">
                                <Tooltip title="quick view item denials" placement="bottom-start">
                                    <IconButton aria-label="quick view item denials" size="small">
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
                    <ProductActions/>
                </Card>
            </div>
        )
    }

}


export default withStyles(styles)(ProductCard)