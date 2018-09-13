import axiosBase from "../../axios/axios";

export const getUsers = () => {
    return dispatch => {
        axiosBase.get('/users.json').then(resp => {
            const data = resp.data;
            const orders = data.map(user => {
                    const userData = {name: user.info.name, email: user.info.email};
                     return user.orders.map(order => ({...order,...userData}))
                }
            )
            console.log(orders);

        }).catch(error => console.log(error))
    }
}