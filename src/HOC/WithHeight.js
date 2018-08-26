import React from 'react'
import PerfectScrollbar from "react-perfect-scrollbar";


const WithHeight = props => {
    return (
        <div style={{height: "calc(100vh - " + props.maxHeight + 'px)' ,position:'relative'}}>
            <PerfectScrollbar>
                {props.children}
            </PerfectScrollbar>
        </div>
        )
}
export default WithHeight