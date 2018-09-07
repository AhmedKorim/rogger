import axios from "axios";
import {AUTH_FAIL, AUTH_LOGOUT, AUTH_START, AUTH_SUCCESS} from "./actionTypes";

const clearToken = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch({type: AUTH_LOGOUT})
        }, +expirationTime * 1000)
    }

};

const authFail = (response) => {
    const error = response.data.error.message;
    console.log(error);
    return {
        type: AUTH_FAIL,
        payload: {error}
    }
};
const authSuccess = (response) => {
    const {
        data: {
            idToken,
            localId
        }
    } = response;
    console.log(idToken, localId);
    return {
        type: AUTH_SUCCESS,
        payload: {idToken, localId}
    }
};


export const auth = (email, password, signUp) => {
    return dispatch => {
        dispatch({type: AUTH_START});
        const requestHeaper = {email, password, returnSecureToken: true};
        let url = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBUGx-6HjRWtjS7kA4bUCgqr65Ni_J4Olg`;
        if (!signUp) {
            url = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBUGx-6HjRWtjS7kA4bUCgqr65Ni_J4Olg`;
        }
        console.log(email, password);
        axios.post(url, requestHeaper)
            .then(resp => {
                dispatch(authSuccess(resp));
                clearToken(resp.data.expiresIn)

            })
            .catch(err => dispatch(authFail(err.response)))
    }
};

