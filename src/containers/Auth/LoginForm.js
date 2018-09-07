import React from 'react';
import FormController from "../../components/UI/FormControles/FormControle";
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import Button from "@material-ui/core/Button/Button";
import Typography from "@material-ui/core/Typography/Typography";

import {connect} from "react-redux";
import {auth} from "../../dux/actions/authActions";

class LoginForm extends React.Component {

    state = {
        controllers: [
            {value: '', label: 'E-mail', id: 'E-mail', type: 'email'},
            {value: '', label: 'Password', id: "user password", type: 'password'},
            {value: false, label: 'keep login', id: 'keepLogin', type: 'checkBox'}
        ]
    };
    changeHandler = ({target: {checked, value}}, id, type) => {
        this.setState({
            controllers: this.state.controllers.map(controller => {
                return controller.id === id ? (controller.value = type === 'checkBox' ? checked : value, controller) : controller
            })
        })
    };

    sumbitLogin = (event) => {
        event.preventDefault();
        const controllers = this.state.controllers;
        this.props.onAuth(controllers[0].value, controllers[1].value)
    };


    render() {
        const {
            state: {
                controllers
            },
            changeHandler,
            sumbitLogin
        } = this;
        return (
            <div className="loginForm">
                <div>
                    <Grid container justify="center" alignItems="center">
                        <Grid xs md={10} lg={6} container item justify="center" alignItems="center">
                            <Grid xs item container justify="center" alignItems="center">
                                <form onSubmit={sumbitLogin}>
                                    <Paper elevation={2}>
                                        <Grid xs item container justify="center" alignItems="center">
                                            {controllers.map(controller => <Grid item xs={controller.type === 'checkBox' ? 3 : 12} className="GridPadding">
                                                <FormController
                                                    changeHandler={changeHandler}
                                                    payload={{...controller, classes: ['input']}}
                                                /></Grid>)}
                                            <Grid item xs={3}>
                                                <Button type="submit" fullWidth onClick={void 0} variant="raised" color="primary"
                                                        className="button login"><Typography className="buttonT">Login In</Typography></Button>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </form>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password) => dispatch(auth(email, password,false))
    }
};
export default connect(null,mapDispatchToProps)(LoginForm);