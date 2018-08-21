import React from 'react'
import Card from "@material-ui/core/Card/Card";
import Button from "@material-ui/core/Button/Button";
import Typography from "@material-ui/core/Typography/Typography";
import './Card.scss';

const ImgCard = props => {
    const {url} = props;
    return (

        <div className="imgCard">
            <Card >
                <div className="imgCardWrapper" >
                    <img src="//via.placeholder.com/400"/>
                    <div className="overLay">
                        <div>
                            <Button variant="raised" color="primary">
                                <Typography color="inherit">
                                    Find out more
                                </Typography>
                            </Button>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}
export default ImgCard