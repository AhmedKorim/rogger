import React, {Component, Fragment} from 'react';
import './App.scss';
import Header from "../components/layout/Header/Header";
import {Route} from "react-router-dom";
import Home from "./Home/Home";
import RDialog from '../components/UI/Dialog/Dialog'

class App extends Component {

    render() {
        return (
            <Fragment>
                <Header/>
                <Fragment>
                    <Route path="/" exact component={Home}/>
                </Fragment>
                <RDialog/>
            </Fragment>
        )
    }
}

export default (App);
