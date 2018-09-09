import axios from "axios";
import axiosBase from "../../axios/axios";
import {AUTH_FAIL, AUTH_LOGOUT, AUTH_START, AUTH_SUCCESS, LOGIN, SNACK_BAR_NEW_MESSAGE} from "./actionTypes";

const clearToken = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch({type: AUTH_LOGOUT})
        }, +expirationTime * 1000)
    }

};

const authFail = (error) => {

    return {
        type: AUTH_FAIL,
        payload: {error}
    }
};
const authSuccess = ({idToken, id, email}) => {
    localStorage.setItem('idToken', idToken);

    return {
        type: AUTH_SUCCESS,
        payload: {idToken, id, email}
    }
};


export const auth = ({email, password, gender, username}, signUp) => {
    return dispatch => {
        dispatch({type: AUTH_START});
        const requestHeaper = {email, password, returnSecureToken: true};
        let url = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBUGx-6HjRWtjS7kA4bUCgqr65Ni_J4Olg`;
        if (!signUp) {
            url = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBUGx-6HjRWtjS7kA4bUCgqr65Ni_J4Olg`;
        }
        axios.post(url, requestHeaper)
            .then(resp => {
                const id = resp.data.localId;
                const idToken = resp.data.idToken
                // create a new node to uses if it is sighnUp || get the data from the node
                if (signUp) {
                    const userData = {
                        id,
                        email: resp.data.email,
                        gender: gender,
                        name: username
                        ,
                        cart: [],
                        wishList: [],
                        compared: [],
                        orders: [],
                        liked: []
                    }
                    axiosBase.post('/users.json', userData).then(resp => {
                            dispatch({
                                type: SNACK_BAR_NEW_MESSAGE,
                                payload: {
                                    message: `welcome to  ${ userData.gender === "femal" ? "MRS: " : "MR: " } ${userData.name}`,
                                    variant: 'success',
                                    duration: 3000
                                }
                            })
                            authSuccess({id, idToken, email: userData.email})
                        }
                    )
                } else {
                    axiosBase.get('/users.json').then(resp => {
                        const fetchedUserdata = Object.entries(resp.data).find(item => item[1].id === id)
                        const userData = {...fetchedUserdata[1], id: fetchedUserdata[0]};
                        dispatch({
                            type: SNACK_BAR_NEW_MESSAGE,
                            payload: {
                                message: `welcome to  ${ userData.gender === "femal" ? "MRS: " : "MR: " } ${userData.name}`,
                                variant: 'success',
                                duration: 3000
                            }
                        })
                        authSuccess({id, idToken, email: userData.email})
                        dispatch({type: LOGIN, payload: {info: {...userData}}})
                    })
                }
                clearToken(resp.data.expiresIn)
            })
            .catch(err => {
                const error = err.response.data.error.message.replace(/_/g, ' ');
                dispatch(authFail(error));
                dispatch({
                    type: SNACK_BAR_NEW_MESSAGE,
                    payload: {
                        message: error,
                        variant: 'error',
                        duration: 3000
                    }
                })
            })
    }
};

