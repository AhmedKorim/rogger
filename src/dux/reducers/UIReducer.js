import {HEADER_DIM} from "../actions/uiActions";



const initialState = {
    headerHeight: null
}
export default (state = initialState, action) => {
    switch (action.types) {
        case HEADER_DIM:
            return state;

        default :
            return state;
    }
}