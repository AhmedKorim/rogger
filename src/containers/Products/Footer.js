import React from 'react'
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Grid from "@material-ui/core/Grid/Grid";
import Button from "@material-ui/core/Button/Button";
import {creatArray} from "../../tools/tools";

const Footer = props => {
    const {currentPage ,pages ,goToPage ,classes} =props;
    const pageCount = creatArray(pages, true);
    const prevItems = currentPage === 0 ? pageCount.slice(0, currentPage) : pageCount.slice(0, currentPage);
    const nextItems = currentPage === pageCount.length ? pageCount.slice(currentPage + 1, pageCount.length) : pageCount.slice(currentPage + 1, pageCount.length);
    return (
        <nav>
            <Toolbar className={[classes.header, 'toolbar'].join(' ')}>
                <Grid container alignItems="center" className="upperNavigation">
                    {prevItems.map((i, index) => <div key={i * i + 'l'}>
                        {index < 3 ? < Button size="small" className="smallButton" onClick={() => goToPage(i)}>{i+1}</Button> :
                            (index === 4 && <Button size="small" className="smallButton">...</Button>)}
                    </div>)}
                    <Button variant="raised" color="primary">
                        {currentPage+1}
                    </Button>
                    {nextItems.map((i, index, array) => <div key={i * index / .5 + 'lio'}>
                        {array.length >= 3 ? (index >= (array.length - 3) ?
                            < Button size="small" className="smallButton" onClick={() => goToPage(i)}>{i+1}</Button> :
                            (index === 4 && <Button size="small" className="smallButton">...</Button>))
                            : < Button variant="small" className="smallButton" onClick={() => goToPage(i)}>{i+1}</Button>}
                    </div>)}
                </Grid>
            </Toolbar>
        </nav>
    )
};
export default Footer