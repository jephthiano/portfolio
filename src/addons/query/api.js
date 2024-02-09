import axios from 'axios';
import { server } from 'addons/global_variable.inc';

const req = `${server}`;
const auth = "JePhThAh";


//axios starts
const axiosClient = axios.create({baseURL: req})

//AXIOS API
const axiosRequest = ({...options}) => {
    axiosClient.defaults.headers.common.Authorization = auth;
     const axiosOnSuccess = (response) => response
     const axiosOnError = (error) => { throw new Error(); }
     return axiosClient(options).then(axiosOnSuccess).catch(axiosOnError)
}
//to use in hook
// return axiosRequest({url: `act/sm/`, method: `post`, data: data}); //post
// return await axiosRequest({url: `get/gim/`, method: `get`}); //get


//fetch starts
const DEFAULT_OPTIONS = {
    headers : {
        "Authorization":auth,
        "Content-Type":"application/json",
    },
}

// FETCH API
// const fetchRequest = (url, options = {}, dependencies = []) => {
//     const fetchOnSuccess = (data) => { return {data:data} }
//     const fetchOnError = (error) => { throw new Error(); }
//     return fetch(`${req}${url}`,{...DEFAULT_OPTIONS,...options})
//     .then(response => {
//         if(response.ok){
//             return response.json()
//         }else{
//             throw new Error();
//         }
//     })
//     .then(fetchOnSuccess)
//     .catch(fetchOnError)
// }
//to use in hook
// return await fetchRequest(`get/gsk/`,{method: `get`}); // get



//CREATE, UPDATE AND DELETE REQUEST
export const sendMessage = (data) => {
    return axiosRequest({url: `sm/`, method: `post`, data: data});
}


//READ REQUEST
export const getImage = async () => {
    return await axiosRequest({url: `gim/`, method: `get`});
}

export const getSocialHandle = async() => {
    return await axiosRequest({url: `gsh/`, method: `get`});
}

export const getSkill = async() => {
    return await axiosRequest({url: `gsk/`, method: `get`});
}

export const getProject = async() => {
    return await axiosRequest({url: `gp/`, method: `get`});
}