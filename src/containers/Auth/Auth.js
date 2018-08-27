import React from 'react';
import './Auth.scss'
import AkTabs from "../../components/UI/Taps/Taps";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

class Auth extends React.Component {
    render() {
        return (

            <div className="auth">
                <AkTabs tab={[{label: 'Login'}, {label: 'SignUp'}]}>
                    <div>
                        <LoginForm/>
                    </div>
                    <div>
                        <SignupForm/>
                    </div>
                </AkTabs>
            </div>

        )
    }
}

export default Auth;