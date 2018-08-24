import React, {Fragment} from 'react'
import {withStyles} from "@material-ui/core";
import Paper from "@material-ui/core/Paper/Paper";
import "./Breadcrumbs.scss"
import Icon from "@material-ui/core/es/Icon/Icon";
import Button from "@material-ui/core/es/Button/Button";
import Typography from "@material-ui/core/Typography/Typography";
import {withRouter} from "react-router-dom";
import Container from "../../../HOC/Container/Container";

const styles = theme => ({
    paper: {
        backgroundColor: theme.palette.background.default
    }
})
const Breadcrumbs = props => {
    const {
        classes,
        location: {pathname}
    } = props;
    const pathes = pathname.split('/').filter(item => item.length > 0);
    return (
        <Container>
            <Paper className={[classes.paper, 'breadcrumbs'].join(' ')}>
                <div>
                    <Button
                        className="breadcrumbsButton"
                        size="small">
                        <Icon>home</Icon>
                        <Typography className="breadcrumbsLink">home</Typography>
                    </Button>
                </div>
                <div className="chevronWrapper">
                    <Icon>chevron_right</Icon>
                </div>
                {pathes.map((path, index) => <Fragment>
                    <div>
                        <Button
                            className="breadcrumbsButton"
                            size="small">
                            <Typography className="breadcrumbsLink">{path}</Typography>
                        </Button>
                    </div>
                    {index === pathes.length - 1 ? null : <div className="chevronWrapper">
                        <Icon>chevron_right</Icon>
                    </div>}
                </Fragment>)}
            </Paper>
        </Container>
    )
}
export default withRouter(withStyles(styles)(Breadcrumbs));