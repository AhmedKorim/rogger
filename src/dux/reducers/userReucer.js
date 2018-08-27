import {ADD_TO_CART, LOGIN, LOGOUT, REMOVE_FROM_CART} from "../actions/userActions";

const initalState = {
    info: {
        admin: false,
        anonymous: true,
        name: 'anonymous',
        avatar: 'An',
        balance: '0',
        paymentVerified: false,

    },
    cart: [],
    wishList: [],
    compared: [],
    orders: []
}


const addToCart = (action, state) => {
    const id = action.payload.item.id;
    const hasItem = state.cart.find(item => item.id === id);
    if (hasItem) return [...state.cart].map(item => {
        const newItem = item.id === id ? (item.count = item.count + 1 , item) : item;
        return newItem;
    });
    return [...state.cart, action.payload.item]
}

const filterCart = (action, state) => {
    const id = action.payload.item.id;
    return [...state.cart].filter(item => item.id !== id)
}

const userReducer = (state = initalState, action) => {
    switch (action.type) {
        case LOGIN :
            const {
                payload: {
                    info: {
                        name,
                        balance,
                        paymentVerified,
                        avatar
                    },
                    cart,
                    wishList,
                    compared,
                    orders

                }
            } = action;
            return {
                ...state,
                info: {
                    ...state.info,
                    anonymous: false,
                    name,
                    balance,
                    paymentVerified,
                    avatar
                },
                cart,
                wishList,
                compared,
                orders

            }
        case LOGOUT :
            return {
                ...initalState
            }
        case ADD_TO_CART:
            // checking for duplicated entries on data base
            // [...state.cart,{id:action.itemID,count:action.count}]
            // {id,}

            return {
                ...initalState,
                cart: addToCart(action, state)
            }

        case REMOVE_FROM_CART:

            return {
                ...state,
                cart: filterCart(action, state)
            }
    }
}