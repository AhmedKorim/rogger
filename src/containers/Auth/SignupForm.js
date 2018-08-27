import React from 'react';
import FormController from "../../components/UI/FormControles/FormControle";
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import Button from "@material-ui/core/Button/Button";
import Typography from "@material-ui/core/Typography/Typography";

class LoginForm extends React.Component {

    state = {
        controllers: [
            {value: '', label: 'User Name', id: 'userNameLogin', type: 'text'},
            {value: '', label: 'Password', id: "user passwordLogin", type: 'password'},
            {value: '', label: 're-enter password', id: "userpasswordLogin", type: 'password'},
            {value: '', label: 'email', id: "userEmail", type: 'email'},
            {value: 'male', label: 'Gender', id: "userGender", type: 'select',options:['male','female','it is secret']},

        ]
    }
    changeHandler = ({target: {checked, value}}, id, type) => {
        this.setState({
            controllers: this.state.controllers.map(controller => {
                return controller.id === id ? (controller.value = type === 'checkBox' ? checked : value, controller) : controller
            })
        })
    }

    render() {
        const {
            state: {
                controllers
            },
            changeHandler,

        } = this;
        return (
            <div className="loginForm authForm">
                <div>
                    <Grid container justify="center" alignItems="center">
                        <Grid xs md={10} lg={6} container item justify="center" alignItems="center">
                            <Grid xs item container justify="center" alignItems="center">
                                <form>
                                    <Paper elevation={2}>
                                        <Grid xs item container justify="center" alignItems="center">
                                            {controllers.map(controller => <Grid item xs={12} className="GridPadding">
                                                <FormController
                                                    changeHandler={changeHandler}
                                                    payload={{...controller, classes: ['input']}}
                                                /></Grid>)}
                                            <Grid item xs={5} className="sighupButtonGrid">
                                                <Button type="submit" fullWidth onClick={void 0} variant="raised" color="primary" className="sighup "><Typography className="buttonT">Sighup</Typography></Button>
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

export default LoginForm;