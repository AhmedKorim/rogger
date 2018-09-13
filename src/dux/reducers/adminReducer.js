import {GET_ORDERS} from "../actions/actionTypes";

const intialState = {
    orders: [],
    Clients: []
}
const adminReducer = (state = intialState, action) => {
    switch (action.type) {
        case  GET_ORDERS :
            return {
                ...state,
                orders: action.payload.orders
            }
        default:
            return {
                ...state
            }
    }
}
export default adminReducer