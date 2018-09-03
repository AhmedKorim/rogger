import React from 'react';
import './Auth.scss'
import AkTabs from "../../components/UI/EnhancedTabs/EnhancedTabs";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

class Auth extends React.Component {
    render() {
        return (
            <div className="auth">
                <AkTabs disableRouting tab={[{label: 'Login'}, {label: 'SignUp'}]}>
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
const mapDispatchToProps = dispatch => {
    return {
        login: () => dispatch()
    }
}
export default Auth;