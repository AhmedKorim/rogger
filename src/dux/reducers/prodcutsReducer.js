import {GET_DATA} from "../actions/productsActions";

const initalState = {
    products: {},
}
const productsReducer = (state = initalState, action) => {
    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                products: {
                    ...state.products,
                    ...action.data
                }
            }

        default :
            return state;
    }
}

export default productsReducer;