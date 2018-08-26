import axiosOrders from "../../axios/axios";

export const GET_DATA = 'GET_DATA';

export const getData = () => {
   return  dispatch => {
        axiosOrders.get('/products.json').then(({data} )=> {
            console.log(data);
            dispatch({type: GET_DATA, data: data})
        })
    }
}

