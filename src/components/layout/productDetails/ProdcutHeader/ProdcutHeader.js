import React from 'react'
import Typography from "@material-ui/core/Typography/Typography";
import Rating from "../../Rateing/Rateing";
import "./ProductHeader.scss"

const ProductHeader = props => {
    return (
        <div>
            <div className="ProductHeader">
                <Typography className="productTitle" variant="subheading">
                    Product name
                </Typography>
                <Rating/>
            </div>
        </div>
    )
}
export default ProductHeader