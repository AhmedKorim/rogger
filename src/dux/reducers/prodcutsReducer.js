import {GET_DATA, UPDATE_ITEM} from "../actions/productsActions";

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
        default :
            return state;
    }
}

export default productsReducer;