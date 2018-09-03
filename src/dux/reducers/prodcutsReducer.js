import {ADD_ITEM, GET_DATA, UPDATE_ITEM} from "../actions/actionTypes";


const initalState = {
    products: [],
}
const productsReducer = (state = initalState, action) => {
    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                products: [...state.products, ...action.data]
            }
        case UPDATE_ITEM:
            return {
                ...state,
                products: state.products.map(product => {
                    return product.id === action.id ? action.data : product
                })
            }
        case ADD_ITEM:
            return {
                ...state,
                products: [...state.products, action.data]
            }
        default :
            return state;
    }
}

export default productsReducer;