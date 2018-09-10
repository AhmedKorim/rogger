import React, {Component, Fragment} from 'react';
import PerfectScrollbar from "react-perfect-scrollbar";
import {connect} from "react-redux";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import Header from "../components/layout/Header/Header";
import ProductPage from "../components/layout/productDetails/ProductPage/ProductPage";
import RDialog from '../components/UI/Dialog/Dialog'
import Spinner from "../components/UI/Spinner/Spinner";

import ToastMessage from "../components/UI/ToastMessage/ToastMessage";
import {SCROLL_Y} from "../dux/actions/actionTypes";
import {tryLogin} from "../dux/actions/authActions";
import {getData} from "../dux/actions/productsActions";
import AdminDashboard from "./Admin/Dashboard/AdminDashboard";
import './App.scss';
import AuthDialogOpener from "./Auth/AuthDialogOpener";
import Home from "./Home/Home";
import Products from "./Products/Products";
import UserDashboard from "./User/Dashboard/UserDashboard";


class App extends Component {

    componentDidMount() {
        this.props.getData()
        this.props.tryLogin();
    }

    scrollManger = (container) => {
        const scroll = container.scrollTop;
        console.log(scroll);
        if (scroll > 1000) return;
        this.props.updateScroll(scroll)
    };


    render() {
        console.log("spinner", (this.props.spinnerVisabity || this.props.authLoading));
        return (
            <Fragment>
                <Header/>
                <Route path={this.props.location.pathname.substring(0, this.props.location.pathname.length - 4) + 'auth'} component={AuthDialogOpener}/>
                <main style={{height: '100vh'}}>
                    <PerfectScrollbar onScrollY={this.props.location.pathname === '/home' ? (container) => this.scrollManger(container) : void 0}>
                        <Switch>
                            <Route path="/products/:productId" component={ProductPage}/>
                            <Route path="/products/" component={Products}/>
                        </Switch>
                        <Switch>
                            <Redirect from="/" to="/home" exact/>
                            <Route path="/home" component={Home}/>
                            <Route path="/dashboard" component={AdminDashboard}/>
                            <Route path="/my_dashboard" component={UserDashboard}/>
                        </Switch>
                    </PerfectScrollbar>
                </main>
                {(this.props.spinnerVisabity || this.props.authLoading) && <Spinner/>}
                <RDialog/>
                <ToastMessage/>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        headerHeight: state.UI.headerHeight,
        authLoading: state.auth.loading,
        spinnerVisabity: state.UI.spinnerVisabity
    }
};
const mapDispatchToProps = dispatch => {
    return {
        getData: () => dispatch(getData()),
        updateScroll: (scrollY) => dispatch({type: SCROLL_Y, payload: {scrollY}}),
        tryLogin: () => dispatch(tryLogin())
    }
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));


/*
*
*
*
* todo: like algorithem
* todo:compared items
* todo:table storing algorthem
* todo:product page breadcuumbs
* todo:auth
* todo:reviews
* todo:add more than one imge to product
* todo:upload images
* todo:filter by category
* refactor radux
* ----
* todo reponsivness
* * todo: reformat the header

*
*
*
* */