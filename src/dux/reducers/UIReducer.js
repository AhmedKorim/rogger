import {HEADER_DIM, PRODUCT_CARD_DETAILS} from "../actions/uiActions";


const initialState = {
    headerHeight: null,
    dialog: {
        data: null,
        component: null,
        open: false,
        prevRoute:null
    },
    aside: {
        open: false
    },

}
export default (state = initialState, action) => {
    switch (action.type) {
        case HEADER_DIM:
            return {
                ...state,
                headerHeight: action.dim
            };
        case PRODUCT_CARD_DETAILS:
            return {
                ...state,
                dialog: {
                    open: action.payload.open,
                    data: action.payload.data,
                    prevRoute:action.payload.prevRoute,
                    component: action.payload.component
                }
            };

        default :
            return state;
    }
}