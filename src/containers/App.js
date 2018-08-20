import React, {Component, Fragment} from 'react';
import './App.scss';
import Header from "../components/layout/Header/Header";
import {Route} from "react-router-dom";
import Home from "./Home/Home";

class App extends Component {

    render() {
        return (
            <Fragment>
                <Header/>
                <Fragment>
                    <Route path="/home" component={Home}/>
                </Fragment>
            </Fragment>
        )
    }
}

export default (App);
