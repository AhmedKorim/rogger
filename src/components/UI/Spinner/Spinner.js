import './Spinner.scss';
import React from "react";

export const Spinner = props => {
    console.log(props.fade);
    return (
        <div className={props.fade ? ["spinner-wrapper ", "hide"].join(' ') : "spinner-wrapper "}>
            <div className="spinner"></div>
        </div>
    )
};
    
