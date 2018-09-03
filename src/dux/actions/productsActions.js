import axios from "../../axios/axios";

export const GET_DATA = 'GET_DATA';
export const UPDATE_ITEM ='UPDATE_ITEM';
export const ADD_ITEM ='ADD_ITEM';

export const getData = () => {

    return dispatch => {
        axios.get('/products.json').then(({data}) => {
            const enhancedData = Object.entries(data).map(product => {
                const item = product[1];
                item.id = product[0];
                return item;
            })

            dispatch({type: GET_DATA, data: enhancedData})
        })
    }
}


