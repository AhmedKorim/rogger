import axios from "../../axios/axios";
import {EDIT_HOMEPAGE_CAROUSEL, GET_DATA} from "./actionTypes";


export const getData = () => {

    return dispatch => {
        axios.get('/products.json').then(({data}) => {
            data = data || {};
            const enhancedData = Object.entries(data).map(product => {
                const item = product[1];
                item.id = product[0];
                return item;
            }).map(product => {
                const _products = {...product};

                const keys = Object.keys(_products).filter(key => key.indexOf('productImg') >= 0)
                    .filter(key => key !== "productImg");

                const imagesArray = keys.map(key => {
                    const imgUrl = {[key]: _products[key]};
                    delete _products[key];
                    return imgUrl;
                });
                return {
                    ..._products,
                    imagesArray,
                }
            });
            dispatch({type: GET_DATA, data: enhancedData})
        })
        axios.get('/homepage/slides/-LLtvPDWdOalG2wBAhCM.json')
            .then(resp => dispatch({type: EDIT_HOMEPAGE_CAROUSEL, payload: {slides: resp.data}}))
            .catch(error => console.log(error.response))

    }
};


