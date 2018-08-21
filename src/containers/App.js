import React, {Component, Fragment} from 'react';
import './App.scss';
import Header from "../components/layout/Header/Header";
import {Route, withRouter} from "react-router-dom";
import Home from "./Home/Home";
import RDialog from '../components/UI/Dialog/Dialog'
import PerfectScrollbar from 'react-perfect-scrollbar'
import {connect} from "react-redux";
import Products from "./Products/Products";


class App extends Component {

    render() {
        return (
            <Fragment>
                <Header/>
                <PerfectScrollbar>
                    <main style={{height: window.innerHeight}}>
                        <Route path="/home" component={Home}/>
                        <Route path="/products" component={Products}/>
                    </main>
                </PerfectScrollbar>
                <RDialog/>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        headerHeight: state.UI.headerHeight
    }
}
export default withRouter(connect(mapStateToProps)(App));
