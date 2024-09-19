import axios from "axios";

 
const axiosPublic = axios.create({
    baseURL:'/allData'
    // baseURL:'http://localhost:5173'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;