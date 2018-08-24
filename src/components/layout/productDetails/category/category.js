import React from 'react'
import Button from "@material-ui/core/Button/Button";
import Typography from "@material-ui/core/Typography/Typography";
import Icon from "@material-ui/core/Icon/Icon";
import "./Categorie.scss";

const Category = props => {
    return (
        <div className="category">
            <Button className="catBut" onClick={() => console.log('clicked')}>
                <Icon className="catIcon">loyalty</Icon>
                <Typography variant="subheading" className="categoryTitle">electoronics</Typography>
            </Button>
        </div>
    )
}
export default Category