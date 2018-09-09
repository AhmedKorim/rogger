import axios from "axios";
import axiosBase from "../../axios/axios";
import {AUTH_FAIL, AUTH_LOGOUT, AUTH_START, AUTH_SUCCESS, LOGIN, LOGOUT, SNACK_BAR_NEW_MESSAGE} from "./actionTypes";

export const logout = () => {
    return dispatch => {
        dispatch({type: LOGOUT});
        dispatch({type: AUTH_LOGOUT});
        localStorage.clear();
    }
}


const authFail = (error) => {
    return {
        type: AUTH_FAIL,
        payload: {error}
    }
};

const clearToken = (expirationTime) => {
    console.log(expirationTime)
    setTimeout(() => {
        logout();
    }, +expirationTime * 1000)


};
const authSuccess = ({idToken, id, userId, email}) => {
    /*
    *
    * id => id of the data base  saved on local storage for re login
    * user id id of the auth   saved on the store local id
    * */
    localStorage.setItem('idToken', idToken);
    localStorage.setItem('id', id);
    return {
        type: AUTH_SUCCESS,
        payload: {idToken, activeUserNodeID: userId, email}
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
                        info: {
                            id,
                            email: resp.data.email,
                            gender: gender,
                            name: username,
                        },
                        cart: [],
                        wishList: [],
                        compared: [],
                        orders: [],
                        liked: []
                    }
                    console.log('[id from post method]', id);
                    axiosBase.post('/users.json', userData).then(resp => {
                            dispatch({
                                type: SNACK_BAR_NEW_MESSAGE,
                                payload: {
                                    message: `welcome to  ${ userData.gender === "femal" ? "MRS: " : "MR: " } ${userData.info.name}`,
                                    variant: 'success',
                                    duration: 3000
                                }
                            })
                            dispatch({type: LOGIN, payload: {...userData}})
                            dispatch(authSuccess({id: userData.id, userId: userData.info.id, idToken, email: userData.email}));
                        }
                    )
                } else {

                    /*{
                          "info": {
                            "email": "ahmedkorrim@gmail.com",
                            "gender": "male",
                            "id": "bUiwRcNe53hIEoKBD6VrDT3IZPs1",
                            "name": "ahmed korim"
                          },
                          "id": "-LLza96nRjMH9pVhmhRm"
                        }
                    * */
                    axiosBase.get('/users.json').then(resp => {
                        const fetchedUserdata = Object.entries(resp.data).find(item => item[1].info.id === id)
                        const userData = {...fetchedUserdata[1], id: fetchedUserdata[0]};
                        const mapeduserData = {
                            info: userData.info,
                            liked: userData.liked || [],
                            compared: userData.compared || [],
                            cart: userData.compared || []



                        }
                        const {gender, name} = userData.info;
                        dispatch({
                            type: SNACK_BAR_NEW_MESSAGE,
                            payload: {
                                message: `welcome to  ${ gender === "female" ? "MRS: " : "MR: " } ${name}`,
                                variant: 'success',
                                duration: 3000
                            }
                        })
                        const userDataA = {...userData}
                        console.log(userDataA);
                        dispatch(authSuccess({id: userData.info.id, userId: userData.id, idToken, email: userData.email}));
                        dispatch({type: LOGIN, payload: {...mapeduserData}})

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

export const tryLogin = () => {
    const token = localStorage.getItem('idToken');
    const id = localStorage.getItem('id');
    return dispatch => {
        if (!(id && token)) {
            dispatch(authFail(null))
        } else {
            axiosBase.get('/users.json').then(resp => {
                const fetchedUserdata = Object.entries(resp.data).find(item => item[1].info.id === id)
                console.log(fetchedUserdata);
                console.log(resp);
                const userData = {...fetchedUserdata[1], id: fetchedUserdata[0]};
                const {gender, name} = userData.info;
                const mapeduserData = {
                    info: userData.info,
                    liked: userData.liked || [],
                    compared: userData.compared || [],
                    cart: userData.compared || []
                }
                dispatch({
                    type: SNACK_BAR_NEW_MESSAGE,
                    payload: {
                        message: `welcome to  ${ gender === "female" ? "MRS: " : "MR: " } ${name}`,
                        variant: 'success',
                        duration: 3000
                    }
                })
                console.log(userData);
                dispatch(authSuccess({id: userData.info.id, userId: userData.id, idToken: token, email: userData.email}));
                dispatch({type: LOGIN, payload: {...mapeduserData}})
            })
        }
    }
}


