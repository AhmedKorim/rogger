import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import {createMuiTheme} from "@material-ui/core";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import thunk from "redux-thunk";
import {lightBlue, pink} from "@material-ui/core/colors";
import UIReducer from "./dux/reducers/UIReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const theme = createMuiTheme({
    palette: {
        type: 'light',
        primary: {
            main: lightBlue[800],
            secondary:pink.A400
        },

    },
    shape:{
        borderRadius:0
    }
})

const store = createStore(
    combineReducers({
        UI: UIReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
);
ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
