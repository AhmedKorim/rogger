import {EDIT_HOMEPAGE_CAROUSEL, HEADER_DIM, PRODUCT_CARD_DETAILS, SCROLL_Y} from "../actions/actionTypes";


const initialState = {
    headerHeight: null,
    scrollY: 0,
    dialog: {
        data: null,
        component: null,
        open: false,
        prevRoute: null
    },
    homepage: {
        slides: [{
            id: 'slide',
            slideImg: '',
            slideLabel: '',
            slideWord: ''
        }]
    },
    aside: {
        open: false
    },

};
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
                    prevRoute: action.payload.prevRoute,
                    component: action.payload.component
                }
            };
        case SCROLL_Y :
            return {
                ...state,
                scrollY: action.payload.scrollY
            };
        case EDIT_HOMEPAGE_CAROUSEL:
            return {
                ...state,
                homepage: {...state.homepage, slides: action.payload.slides}
            }
        default :
            return state;
    }
}