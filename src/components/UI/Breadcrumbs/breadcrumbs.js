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

class Breadcrumbs extends React.Component {

    getPathes = () => this.pathes = this.props.location.pathname.split('/').filter(item => item.length > 0);


    handelRoute = route => {
        const newPath = this.pathes.reduce((acc, item) => {
            return acc.concat(item + '/')
        }, '')
        console.log(route);
        this.props.history.push('/' +route)

    }

    render() {
        this.getPathes();
        const {
            props: {
                classes,
                location: {pathname},

            },
            pathes,
            handelRoute
        } = this;

        return (
            <Container>
                <Paper className={[classes.paper, 'breadcrumbs'].join(' ')}>
                    <div>
                        <Button
                            className="breadcrumbsButton"
                            size="small"
                            onClick={() => handelRoute('home')}
                        >
                            <Icon>home</Icon>
                            <Typography className="breadcrumbsLink">home</Typography>
                        </Button>
                    </div>
                    <div className="chevronWrapper">
                        <Icon>chevron_right</Icon>
                    </div>
                    {pathes.map((path, index) => <div className="wrapper" key={path}>
                        <div>
                            <Button
                                className="breadcrumbsButton"
                                onClick={() => handelRoute(path)}

                                disabled={index === pathes.length - 1}
                                size="small">
                                <Typography
                                    className={["breadcrumbsLink", index === pathes.length - 1 ? 'activeBreadcrumbItem' : null].join(' ')}>{path}</Typography>
                            </Button>
                        </div>
                        {index === pathes.length - 1 ? null : <div className="chevronWrapper">
                            <Icon>chevron_right</Icon>
                        </div>}
                    </div>)}
                </Paper>
            </Container>

        )
    }
}

export default withRouter(withStyles(styles)(Breadcrumbs));