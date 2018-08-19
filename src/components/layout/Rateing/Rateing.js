import React from 'react'
import "./Rateing.scss"
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import Typography from "@material-ui/core/Typography/Typography";

const Rating = props => {
    return (
        <div className="ratingComponent">
            <Tooltip title="15 reviews" placement="bottom-end">
                <div className="ratingWrapper">
                    <div>
                        <div>
                            <i className="material-icons starRate">start</i>
                            <i className="material-icons starRate">start</i>
                            <i className="material-icons starRate">start</i>
                            <i className="material-icons starRate">start</i>
                            <i className="material-icons starRate">start</i>
                        </div>
                        <div>
                            <Typography
                                className="reviewsCounter">
                                14 reviews
                            </Typography>
                        </div>
                    </div>
                </div>
            </Tooltip>
        </div>

    )
}
export default Rating