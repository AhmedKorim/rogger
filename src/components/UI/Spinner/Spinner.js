import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import React from 'react'
import './Spinner.scss';

const Spinner = props => {
    return (
        <div className="spinner-wrapper">
            <CircularProgress size={100} thickness={3}/>
        </div>
    )
}
export default Spinner
