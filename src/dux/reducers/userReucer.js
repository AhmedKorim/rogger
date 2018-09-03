import {ADD_TO_CART, LIKE, LOGIN, LOGOUT, MANAGE_COMPARED, REMOVE_FROM_CART} from "../actions/actionTypes";

const initalState = {
    info: {
        admin: false,
        anonymous: true,
        name: 'anonymous',
        email: 'anonymous@rogger.com',
        avatar: 'A',
        balance: 0,
        paymentVerified: false,

    },
    cart: [],
    wishList: [],
    compared: [],
    orders: [],
    liked: []
}

const addToCart = (action, state) => {
    const id = action.payload.item.id;
    const hasItem = state.cart.find(item => item.id === id);
    const cart = [...state.cart];

    if (hasItem && action.action === 'add') return cart;
    // TODO : outsourse to thnk remove item from cart if it's coutn is ===0;
    if (action.action !== 'add') {
        const inc = action.action === 'addOne' ? 1 : -1;
        if (hasItem) return cart.map(item => {
            const newItem = item.id === id ? (item.count = item.count + inc >= 0 ? item.count + inc : 0  , item) : item;
            return newItem;
        });
    }
    return [...cart, {...action.payload.item, count: 1}]
}

const filterCart = (action, state) => {
    const id = action.payload.item.id;
    return [...state.cart].filter(item => item.id !== id)
}

const liked = (action, state) => {
    const id = action.payload.item.id;

    const item = state.liked.find(item => item.id === id);

    if (!item) return [...state.liked, {id: id}];

    return state.liked.filter(item => item.id !== id);
}

const manageCompared = (action, state) => {
    const id = action.payload.item.id;
    // item on compared
    const item = state.compared.find(item => item.id === id);
    if (!item) return [...state.compared, {id: id}];
    return state.compared.filter(item => item.id !== id);
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
                ...state,
                cart: addToCart(action, state)
            }

        case REMOVE_FROM_CART:

            return {
                ...state,
                cart: filterCart(action, state)
            }
        case LIKE:
            return {
                ...state,
                liked: liked(action, state)
            }
        case MANAGE_COMPARED:
            return {
                ...state,
                compared: manageCompared(action, state)
            }
        default:
            return state;
    }
}

export default userReducer;