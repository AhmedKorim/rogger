import {HEADER_DIM, PRODCUT_CARD_DETIALSDETAILS} from "../actions/uiActions";


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
        case PRODCUT_CARD_DETIALSDETAILS:
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