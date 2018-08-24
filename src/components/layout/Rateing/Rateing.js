import React from 'react'
import "./Rateing.scss"
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import Typography from "@material-ui/core/Typography/Typography";
import Grid from "@material-ui/core/Grid/Grid";

const Rating = props => {
    return (
        <div className="ratingComponent">
            <Tooltip title="15 reviews" placement="bottom-end">
                <Grid container  alignItems="center" justify="center">
                    <Grid item className="rateingGrid" >
                        <div className="ratingWrapper">
                            <div className="rate">
                                <div className="stars value ">
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
                            <Typography
                                className="reviewsCounter">
                                14 reviews
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Tooltip>
        </div>

    )
}
export default Rating