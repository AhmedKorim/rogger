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

export const like = (id) => {
    return (dispatch, getState) => {
        const State = {...getState()};
        const userData = {...State.user};
        const userId = State.auth.id;
        const userLikedItems = [...userData.liked];
        const getLikedItemsArray = () => {
            if (!id) return userLikedItems;
            const item = userLikedItems.find(item => item.id === id);
            if (!item) return [...userLikedItems, {id: id}];
            return userLikedItems.filter(item => item.id !== id);
        }
        const likedArray = getLikedItemsArray();
        dispatch({type: LIKE, payload: {liked: likedArray}});

        if (!userData.info.anonymous) {
            console.log(userId, likedArray);
            axiosBase.put(`users/${userId}/liked.json`, likedArray)
                .then(resp => {
                    dispatch(messge('item added to wish list ', 'success', 2000))
                })
                .catch(error => messge(error.response.data.error.message, 'error'))
        }

    }
}