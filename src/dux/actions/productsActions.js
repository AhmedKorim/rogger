import axiosOrders from "../../axios/axios";

export const GET_DATA = 'GET_DATA';

export const getData = () => {
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

