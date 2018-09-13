import React from 'react';
import {withRouter} from "react-router-dom";
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
            {value: '', label: 'User Name', id: 'userName', type: 'text'},
            {value: '', label: 'Password', id: "password", type: 'password'},
            {value: '', label: 're-enter password', id: "reEnterPassword", type: 'password'},
            {value: '', label: 'email', id: "userEmail", type: 'email'},
            {value: 'male', label: 'Gender', id: "userGender", type: 'select', options: ['male', 'female', 'it is secret']},

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
        const controllers = this.state.controllers
            .filter(controller => controller.id !== 'reEnterPassword')
            .reduce((accumulator, controller) => ({
                    ...accumulator,
                    [controller.label.toLowerCase().replace(/ /g, '')]: controller.value
                })
                , {})
        console.log(controllers);
        this.props.onAuth(controllers, null, this.props.history.push)

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
            <div className="loginForm authForm">
                <div>
                    <Grid container justify="center" alignItems="center">
                        <Grid xs container item justify="center" alignItems="center">
                            <Grid xs={11} item container justify="center" alignItems="center">
                                <form onSubmit={sumbitLogin}>
                                    <Paper elevation={2}>
                                        <Grid xs item container justify="center" alignItems="center">
                                            {controllers.map(controller => <Grid item xs={11} className="GridPadding">
                                                <FormController
                                                    changeHandler={changeHandler}
                                                    payload={{...controller, classes: ['input']}}
                                                /></Grid>)}
                                            <Grid item xs={5} className="sighupButtonGrid">
                                                <Button type="submit" fullWidth onClick={void 0} variant="raised" color="primary"
                                                        className="sighup "><Typography className="buttonT">Sighup</Typography></Button>
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
        onAuth: (userData, _, push) => dispatch(auth(userData, true, push))
    }
};
export default withRouter(connect(null, mapDispatchToProps)(LoginForm));