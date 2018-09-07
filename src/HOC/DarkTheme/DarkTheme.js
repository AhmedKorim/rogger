import React from "react";
import {createMuiTheme} from "@material-ui/core";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";


const DarkTheme = createMuiTheme({
    palette: {
        type: 'dark'
    }
});

const WithDarkTheme = (WrappedComponent) => {
    return class extends React.Component {
        render() {
            return (
                <MuiThemeProvider theme={DarkTheme}>
                    <WrappedComponent {...this.props}/>
                </MuiThemeProvider>)
        }
    }
};
export default WithDarkTheme;