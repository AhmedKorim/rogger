import React, {Component, Fragment} from 'react';
import './App.scss';
import Header from "../components/layout/Header/Header";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import Home from "./Home/Home";
import RDialog from '../components/UI/Dialog/Dialog'
import {connect} from "react-redux";
import Products from "./Products/Products";
import ProductPage from "../components/layout/productDetails/ProductPage/ProductPage";
import {getData} from "../dux/actions/productsActions";
import AuthDialogOpener from "./Auth/AuthDialogOpener";
import AdminDashboard from "./Admin/Dashboard/AdminDashboard";
import UserDashboard from "./User/Dashboard/UserDashboard";
import PerfectScrollbar from "react-perfect-scrollbar";
import {SCROLL_Y} from "../dux/actions/actionTypes";


class App extends Component {

    componentDidMount() {
        this.props.getData()
    }

    scrollManger = (container) => {
        const scroll = container.scrollTop;
        if (scroll > 1000) return;
        this.props.updateScroll(scroll)
    }


    render() {
        return (
            <Fragment>
                <Header/>
                <Route path={this.props.location.pathname.substring(0, this.props.location.pathname.length - 4) + 'auth'} component={AuthDialogOpener}/>
                <main style={{height: '100vh'}}>
                    <PerfectScrollbar onScrollY={this.props.location.pathname === '/home' ? (container) => this.scrollManger(container) : void 0} >
                        <Switch>
                            <Route path="/products/:productId" component={ProductPage}/>
                            <Route path="/products" component={Products}/>
                        </Switch>
                        <Switch>
                            <Redirect from="/" to="/home" exact/>
                            <Route path="/home" component={Home}/>
                            <Route path="/dashboard" component={AdminDashboard}/>
                            <Route path="/my_dashboard" component={UserDashboard}/>
                        </Switch>
                    </PerfectScrollbar>
                </main>
                <RDialog/>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        headerHeight: state.UI.headerHeight,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getData: () => dispatch(getData()),
        updateScroll: (scrollY) => dispatch({type: SCROLL_Y, payload: {scrollY}})
    }
}
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