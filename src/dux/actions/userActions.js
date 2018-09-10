import axiosBase from "../../axios/axios";
import {ADD_TO_CART, LIKE, MANAGE_COMPARED, SNACK_BAR_NEW_MESSAGE} from "./actionTypes";

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
            axiosBase.put(`users/${userId}/liked.json`, likedArray)
                .then(resp => {
                    dispatch(messge('item added to wish list ', 'success', 2000))
                })
                .catch(error => dispatch(messge(error.response.data.error.message, 'error')))
        }

    }
};

export const compared = (id) => {
    return (dispatch, getState) => {
        const State = {...getState()};
        const userData = {...State.user};
        const userId = State.auth.id;
        const comparedItems = [...userData.compared];
        const getLikedItemsArray = () => {
            if (!id) return comparedItems;
            const item = comparedItems.find(item => item.id === id);
            if (!item) return [...comparedItems, {id: id}];
            return comparedItems.filter(item => item.id !== id);
        }
        const comparedArray = getLikedItemsArray();
        dispatch({type: MANAGE_COMPARED, payload: {compared: comparedArray}});

        if (!userData.info.anonymous) {
            console.log(userId, comparedArray);
            axiosBase.put(`users/${userId}/compared.json`, comparedArray)
                .then(resp => {
                    dispatch(messge('item added to compared list ', 'success', 2000))
                })
                .catch(error => dispatch(messge(error.response.data.error.message, 'error')))

        }

    }
};


export const addToCart = (id, action) => {
    return (dispatch, getState) => {
        const State = {...getState()};
        const userData = {...State.user};
        const userId = State.auth.id;
        const cart = [...userData.cart];
        if (!id) {
            dispatch({type: ADD_TO_CART, cart: cart})
            return;
        }
        const hasItem = cart.find(item => item.id === id);
        /*  if (hasItem && action === 'add') {
              dispatch({type: ADD_TO_CART, cart: cart})
              if (!userData.info.anonymous) {
                  axiosBase.put(`users/${userId}/cart.json`, cart)
                      .then(resp => {
                          dispatch(messge('item added to cart ', 'success', 2000))
                      })
                      .catch(error => messge(error.response.data.error.message, 'error'))
              }
              return;
          }*/
        // TODO : outsourse to thnk remove item from cart if it's coutn is ===0;
        if (action !== 'add') {
            const inc = action === 'addOne' ? 1 : -1;
            let deleteIndex = null;
            if (hasItem) {
                console.log(cart);
                const cartToSend = cart.map((item, index) => {
                    if (item.id !== id) return item;
                    const newItem = {...item, count: item.count + inc};
                    if (newItem.count <= 0) deleteIndex = index;
                    return newItem;
                })
                dispatch({
                    type: ADD_TO_CART,
                    cart: cartToSend

                })
                if (!userData.info.anonymous) {
                    axiosBase.put(`users/${userId}/cart.json`, cartToSend)
                        .then(resp => {
                            dispatch(messge(` one item ${action === 'addOne' ? "added" : " removed"} to cart `, 'success', 1000))
                        })
                        .catch(error => dispatch(messge(error.response.data.error.message, 'error')))

                }
            }
            return;
        }
        const cartToSend = [...cart, {id, count: 1}]
        dispatch({type: ADD_TO_CART, cart: cartToSend})
        if (!userData.info.anonymous) {
            axiosBase.put(`users/${userId}/cart.json`, cartToSend)
                .then(resp => {
                    dispatch(messge(` added  to cart `, 'success', 1000))
                })
                .catch(error => {

                    dispatch(messge('failed to save your data please make sure you are online', 'error'))
                })

        }
    }
};






// TODO: refactor this file and authActions file



















