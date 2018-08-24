import React from 'react'
import Typography from "@material-ui/core/Typography/Typography";
import Rating from "../../Rateing/Rateing";
import "./ProductHeader.scss"

const ProductHeader = props => {
    return (
        <div>
            <header>
                <Typography variant="subheading">
                    Product name
                </Typography>
                <Rating/>
            </header>
        </div>
    )
}
export default ProductHeader