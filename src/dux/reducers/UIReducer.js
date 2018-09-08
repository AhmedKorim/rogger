import {CLOSE_TOAST_MESSAGE, EDIT_HOMEPAGE_CAROUSEL, HEADER_DIM, PRODUCT_CARD_DETAILS, SCROLL_Y, SNACK_BAR_NEW_MESSAGE} from "../actions/actionTypes";


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
    snackbar: {
        open: false,
        message: 'success',
        variant: 'success',
        duration: 5000
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
        case  SNACK_BAR_NEW_MESSAGE:
            return {
                ...state,
                snackbar: {
                    ...state.snackbar,
                    duration: action.payload.duration || 5000,
                    open: action.payload.open || true,
                    message: action.payload.message,
                    variant: action.payload.variant
                }
            }
        case CLOSE_TOAST_MESSAGE:
            return {
                ...state,
                snackbar: {
                    open: false,
                    message: '',
                    variant: ''
                }
            }
        default :
            return state;
    }
}