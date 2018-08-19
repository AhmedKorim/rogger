import React, {Component} from 'react';
import './App.scss';
import ProductDetails from "../components/layout/productDetails/ProductDetails";
import ProductCard from "../components/layout/ProductCard/ProductCard";
import Header from "../components/layout/Header/Header";

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <ProductCard/>
                <div style={{
                    width:"100%"
                }}>
                    <ProductDetails/>
                </div>
            </div>
        );
    }
}

export default App;
