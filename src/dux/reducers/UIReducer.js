import {HEADER_DIM} from "../actions/uiActions";


const initialState = {
    headerHeight: null
}
export default (state = initialState, action) => {
    switch (action.types) {
        case HEADER_DIM:
            return {
                ...state, headerHeight: action.dim
            };

        default :
            return {   ...state, headerHeight: action.dim};
    }
}