import axios from "axios";


const axiosBase = axios.create({
    baseURL: 'https://react-1cfd5.firebaseio.com'
});
export default axiosBase;