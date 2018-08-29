import {ADD_TO_CART, LIKE, LOGIN, LOGOUT, REMOVE_FROM_CART} from "../actions/userActions";

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
    // TODO : outsourse to thnk remove item from cart if it's coutn is ===0;
    if (action.action !== 'add') {
        const inc = action.action === 'addOne' ? 1 : -1;
        if (hasItem) return cart.map(item => {
            const newItem = item.id === id ? (item.count = item.count + inc , item) : item;
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

   if(!item) return [...state.liked,{id:id}];

    return state.liked.filter(item => item.id !== id);
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
        case LIKE:
            return {
                ...state,
                liked: liked(action, state)
            }
        default:
            return state;
    }
}

export default userReducer;