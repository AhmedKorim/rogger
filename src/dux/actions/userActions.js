import axiosBase from "../../axios/axios";
import {LIKE, SNACK_BAR_NEW_MESSAGE} from "./actionTypes";

const messge = (message, variant, duration) => {
    return {
        type: SNACK_BAR_NEW_MESSAGE,
        payload: {
            message: message,
            variant: variant,
            duration: duration || 4000
        }
    }
}

const syncActions = (userData, userId, path, data, message, variant) => {
    if (!userData.info.anonymous) {
        return dispatch => {
            axiosBase.put(`/${path}/${userId}/liked.json`, data)
                .then(resp => {
                    dispatch(messge(message, variant, 2000))
                })
                .catch(error => messge(error.response.data.error.message, 'error'))
        }
    }
}

export const like = (id) => {
    return (dispatch, getState) => {
        const State = {...getState()};
        const userData = {...State.user};
        const userId = State.auth.id;
        let likedArray = [...userData.liked];
        if (!id) {
            dispatch({type: LIKE, payload: {liked: likedArray}});
            syncActions(likedArray, userId, 'users', '', '')
            return;
        }
        const item = likedArray.find(item => item.id === id);
        if (!item) {
            const addedArray =[...likedArray, {id: id}]
            dispatch({type: LIKE, payload: {liked:addedArray }});
            syncActions(userData, userId, 'users', '', '')
            return
        }
        const filtredArray =likedArray.filter(item => item.id !== id);
        dispatch({type: LIKE, payload: {liked: filtredArray}});
        syncActions(filtredArray, userId, 'users', 'item removed from wish list', '')

    }


}
