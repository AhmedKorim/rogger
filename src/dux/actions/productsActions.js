import axios from "../../axios/axios";
import {GET_DATA} from "./actionTypes";


export const getData = () => {

    return dispatch => {
        axios.get('/products.json').then(({data}) => {
            data = data || {};
            const enhancedData = Object.entries(data).map(product => {
                const item = product[1];
                item.id = product[0];
                return item;
            })

            dispatch({type: GET_DATA, data: enhancedData})
        })
    }
}


