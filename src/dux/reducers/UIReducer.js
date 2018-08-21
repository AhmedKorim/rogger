import {HEADER_DIM, PRODCUT_CARD_DETIALSDETAILS} from "../actions/uiActions";


const initialState = {
    headerHeight: null,
    productCard: {
        activeCard: null,
        open: false
    },
    aside :{
        open: false
    }
}
export default (state = initialState, action) => {
    switch (action.type) {
        case HEADER_DIM:
            return {
                ...state,
                headerHeight: action.dim
            };
        case PRODCUT_CARD_DETIALSDETAILS:
            return {
                ...state,
                productCard: {
                    open: action.payload.open,
                    activeCard: action.payload.activeCard
                }
            };

        default :
            return state;
    }
}