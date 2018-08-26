import React from 'react'
import Typography from "@material-ui/core/Typography/Typography";
import "./ProductHeader.scss"

const ProductHeader = props => {
    const { productName } =props;
    return (
        <div>
            <div className="ProductHeader">
                <Typography className="productTitle" variant="subheading">
                    {productName ||"Product Name"  }
                </Typography>
            </div>
        </div>
    )
}
export default ProductHeader