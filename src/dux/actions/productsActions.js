import axiosOrders from "../../axios/axios";

export const GET_DATA = 'GET_DATA';
export const UPDATE_ITEM ='UPDATE_ITEM';
export const ADD_ITEM ='ADD_ITEM';

export const getData = () => {
    console.log('getting Data');
    return dispatch => {
        axiosOrders.get('/products.json').then(({data}) => {
            const enhancedData = Object.entries(data).map(product => {
                const item = product[1];
                item.id = product[0];
                return item;
            })
            console.log(enhancedData);
            dispatch({type: GET_DATA, data: enhancedData})
        })
    }
}


