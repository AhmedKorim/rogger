import axios from 'axions';

const axiosOrders = axios.create({
    baseUrl: 'https://react-1cfd5.firebaseio.com/'
})
export default axiosOrders;