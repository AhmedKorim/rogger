import React from 'react'
import "./Rateing.scss"
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import Typography from "@material-ui/core/Typography/Typography";
import Grid from "@material-ui/core/Grid/Grid";

const Rating = props => {
    const {rate, reviews} = props;
    return (
        <div className="ratingComponent">
            <Tooltip title="15 reviews" placement="bottom-end">
                <Grid container alignItems="center" justify="center">
                    <Grid item className="rateingGrid">
                        <div className="ratingWrapper">
                            <div className="rate">
                                <div className="stars value " style={{width: rate ? rate + '%' : 100 + '%'}}>
                                    <div className="rateValue">
                                        <i className="material-icons starRate">star</i>
                                        <i className="material-icons starRate">star</i>
                                        <i className="material-icons starRate">star</i>
                                        <i className="material-icons starRate">star</i>
                                        <i className="material-icons starRate">star</i>
                                    </div>
                                </div>
                                <div className="stars ">
                                    <i className="material-icons starRate">star_border</i>
                                    <i className="material-icons starRate">star_border</i>
                                    <i className="material-icons starRate">star_border</i>
                                    <i className="material-icons starRate">star_border</i>
                                    <i className="material-icons starRate">star_border</i>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item className="rateingGrid">
                        <div>
                            {(reviews || reviews > 0)&& <Typography
                                className="reviewsCounter">
                                {reviews} reviews
                            </Typography>}
                        </div>
                    </Grid>
                </Grid>
            </Tooltip>
        </div>

    )
}
export default Rating