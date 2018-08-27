import {HEADER_DIM, PRODUCT_CARD_DETAILS} from "../actions/uiActions";


const initialState = {
    headerHeight: null,
    dialog: {
        data: null,
        component: null,
        open: false
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
            console.log(action);
            return {
                ...state,
                dialog: {
                    open: action.payload.open,
                    data: action.payload.data,
                    component: action.payload.component
                }
            };

        default :
            return state;
    }
}