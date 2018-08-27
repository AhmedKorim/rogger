import React, {Component, Fragment} from 'react';
import './App.scss';
import Header from "../components/layout/Header/Header";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import Home from "./Home/Home";
import RDialog from '../components/UI/Dialog/Dialog'
import PerfectScrollbar from 'react-perfect-scrollbar'
import {connect} from "react-redux";
import Products from "./Products/Products";
import ProductPage from "../components/layout/productDetails/ProductPage/ProductPage";
import Dashboard from "./Admin/Dashboard/Dashboard";
import {getData} from "../dux/actions/productsActions";
import AuthDialogOpener from "./Auth/AuthDialogOpener";


class App extends Component {

    componentDidMount() {
        this.props.getData()
        console.log(this.props.location.pathname);

    }


    render() {
        console.log(this.props.location.pathname.substring(0, this.props.location.pathname.length - 4) + 'auth');
        return (
            <Fragment>
                <Header/>
                <PerfectScrollbar>
                    <Route path={this.props.location.pathname.substring(0, this.props.location.pathname.length - 4) + 'auth'} component={AuthDialogOpener}/>
                    <main style={{height: '100vh'}}>
                        <Switch>
                            <Route path="/product/:productId" component={ProductPage}/>
                            <Route path="/products" component={Products}/>
                            <Redirect from="/" to="/home" exact/>
                            <Route path="/home" component={Home}/>
                            <Route path="/dashboard" component={Dashboard}/>
                        </Switch>
                    </main>
                </PerfectScrollbar>
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
        getData: () => dispatch(getData())
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
