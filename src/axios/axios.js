import axios from "axios";


const axiosOrders = axios.create({
    baseURL: 'https://react-1cfd5.firebaseio.com'
})
export default axiosOrders;