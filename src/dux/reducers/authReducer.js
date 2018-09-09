import {AUTH_FAIL, AUTH_START, AUTH_SUCCESS, AUTH_LOGOUT} from "../actions/actionTypes";

const intialState = {
    loading: false,
    auth: false,
    error: null,
    token: null,
    email: null,
    id: null
};
const authReducer = (state = intialState, action) => {
    switch (action.type) {
        case AUTH_START:
            return {
                ...state,
                loading: true
            };
        case AUTH_SUCCESS:
            return {
                ...intialState,
                auth: true,
                token: action.payload.idToken,
                id: action.payload.activeUserNodeID,
                email: action.payload.email
            };
        case AUTH_FAIL:
            return {
                ...intialState,
                error: action.payload.error
            };
        case AUTH_LOGOUT :
            return {...intialState};
        default :
            return state

    }
};
export default authReducer;
