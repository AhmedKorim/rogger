import Grid from "@material-ui/core/Grid/Grid";
import React from 'react';
import './Auth.scss'
import AkTabs from "../../components/UI/EnhancedTabs/EnhancedTabs";
import Container from "../../HOC/Container/Container";
import withPadding from "../../HOC/WithPadding/WithPadding";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

class Auth extends React.Component {
    render() {
        return (
            <div className="auth">
                <Container>
                    <Grid container alignContent="center" justify="center">
                        <Grid xs md={9} lg={6}>
                            <AkTabs disableRouting tab={[{label: 'Login'}, {label: 'SignUp'}]}>
                                <div>
                                    <LoginForm/>
                                </div>
                                <div>
                                    <SignupForm/>
                                </div>
                            </AkTabs>
                        </Grid>
                    </Grid>
                </Container>
            </div>

        )
    }
}

/*const mapDispatchToProps = dispatch => {
    return {
        login: () => dispatch()
    }
}*/
export default withPadding(Auth);