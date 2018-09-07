import React from 'react'
import {withStyles} from "@material-ui/core";
import Paper from "@material-ui/core/Paper/Paper";
import "./Breadcrumbs.scss"
import Icon from "@material-ui/core/Icon/Icon";
import Typography from "@material-ui/core/Typography/Typography";
import {withRouter} from "react-router-dom";
import Container from "../../../HOC/Container/Container";
import Button from "@material-ui/core/Button/Button";

const styles = theme => ({
    paper: {
        backgroundColor: theme.palette.background.default
    }
});

class Breadcrumbs extends React.Component {

    getPathes = () => this.pathes = this.props.location.pathname.split('/').filter(item => item.length > 0);


    handelRoute = route => {
        if (route === 'home') {
            this.props.history.push('/home');
            return;
        }
        const routeIndex = this.pathes.indexOf(route);
        console.log(routeIndex);
        const newPath = this.pathes.reduce((acc, item, index) => {
            return index <= routeIndex ? acc + item + '/' : acc;
        }, '');
        console.log(newPath);
        this.props.history.push('/' + newPath)

    };

    render() {
        this.getPathes();
        const {
            props: {
                classes,
             /*   location: {pathname},*/

            },
            pathes,
            handelRoute
        } = this;
        return (
            <Container>
                <Paper className={[classes.paper, 'breadcrumbs'].join(' ')} elevation={0}>
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








