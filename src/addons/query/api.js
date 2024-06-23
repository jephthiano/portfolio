import axios from 'axios';
import { server } from 'addons/global_variable.inc';

const req = `${server}`;
const auth = "JePhThAh";


//AXIOS API
// axios starts
const axiosClient = axios.create({baseURL: req});
const axiosRequest = ({...options}) => {
    axiosClient.defaults.headers.common.Authorization = auth;
    const axiosOnSuccess = (response) => JSON.parse(response); 
    
     const axiosOnError = (error) => { throw new Error(); }
     return axiosClient(options).then(axiosOnSuccess).catch(axiosOnError)
}
//to use in hook
// return axiosRequest({url: `act/sm/`, method: `post`, data: data}); //post
// return await axiosRequest({url: `get/gim/`, method: `get`}); //get


// FETCH API

// //fetch starts
const DEFAULT_OPTIONS = {
    headers : {
        "Authorization":auth,
        "Content-Type":"application/json",
    },
}

const fetchRequest = (url, options = {}, dependencies = []) => {
    const fetchOnSuccess = (data) => { return {data:data} }
    const fetchOnError = (error) => { throw new Error(); }
    return fetch(`${req}${url}`,{...DEFAULT_OPTIONS,...options})
    .then(response => {
        if(response.ok){
            return JSON.parse(response);
        }else{
            throw new Error();
        }
    })
    .then(fetchOnSuccess)
    .catch(fetchOnError)
}
//to use in hook
// return await fetchRequest(`act/sm/`,{method: `post`}); // get
// return await fetchRequest(`get/gsk/`,{method: `get`}); // get





//READ REQUEST
export const getNeededData = async () => {
    return await axiosRequest({url: `gnd/`, method: `get`, data:{'request_type' : 'normal', 'action' : 'get_needed_data'}});
    // return await fetchRequest(`gnd/`,{method: `get`, data:{'request_type' : 'normal', 'action' : 'get_needed_data'}}); // get
}

//CREATE, UPDATE AND DELETE REQUEST
export const sendMessage = (data) => {
    return axiosRequest({url: `sm/`, method: `post`, data: data});
}