import React from 'react'
import Typography from "@material-ui/core/Typography/Typography";
import "./ProductHeader.scss"

const ProductHeader = props => {
    return (
        <div>
            <div className="ProductHeader">
                <Typography className="productTitle" variant="subheading">
                    Product name
                </Typography>
            </div>
        </div>
    )
}
export default ProductHeader