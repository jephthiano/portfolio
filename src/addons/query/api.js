import axios from 'axios';
import { server } from 'addons/global_variable.inc';

const req = `${server}`;
const auth = "JePhThAh";


//AXIOS API
// axios starts
const axiosClient = axios.create({baseURL: req});
const axiosRequest = (content_type,{...options}, type='fetch') => {
    axiosClient.defaults.headers.common.Authorization = auth;
    axiosClient.defaults.headers.common.ContentType = content_type;
    
    const axiosOnSuccess = (response) => {
        return (type === 'fetch') ? response.data.responseData : response.data;
    }; 
    const axiosOnError = (error) => {}

    axiosClient(options)
    return axiosClient(options).then(axiosOnSuccess).catch(axiosOnError)
}
//to use in hook
// return axiosRequest({url: `act/sm/`, method: `post`, data: data}); //post
// return await axiosRequest({url: `get/gim/`, method: `get`}); //get


// FETCH API
//fetch starts
// const DEFAULT_OPTIONS = {
//     headers : {
//         "Authorization":auth,
//         "Content-Type":"application/json",
//     },
// }

// const fetchRequest = (url, options = {}, dependencies = []) => {
//     const fetchOnSuccess = (data) => { return {data:data} }
//     const fetchOnError = (error) => { console.log(error) }
//     return fetch(`${req}${url}`,{...DEFAULT_OPTIONS,...options})
//     .then(response => {
//         if(response.ok){
//             console.log(response);
//             return JSON.parse(response);
//         }else{
//             throw new Error();
//         }
//     })
//     .then(fetchOnSuccess)
//     .catch(fetchOnError)
// }
//to use in hook
// return await fetchRequest(`act/sm/`,{method: `post`}); // get
// return await fetchRequest(`get/gsk/`,{method: `get`}); // get





//READ REQUEST
export const getNeededData = async () => {
    let data = {"request_type" : "normal", "action" : "get_needed_data"};
    return await axiosRequest('application/json', {url: `/`, method: `post`, data: data});
    // return await fetchRequest(``,{method: `post`, data: data}); // get
}

//CREATE, UPDATE AND DELETE REQUEST
export const sendMessage = (nor_data) => {
    let req_data = {"request_type" : "normal", "action" : "send_message"};
    const data = { ...req_data, ...nor_data };
    return axiosRequest('application/json', {url: ``, method: `post`, data: data}, 'post');
}