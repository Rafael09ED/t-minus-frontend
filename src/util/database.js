import axios from 'axios';
const hostname = 'http://t-min-dot-us.herokuapp.com/countdown/';


const getCountdowns = () => {
    let url = hostname  + '/countdown/'
    return axios.get(url);
}

const getCountdown = (id) => {
    let url = hostname  + '/countdown/' + id
    return axios.get(url);
}


const createCountdown = (data) => {
    let url = hostname  + '/countdown/'
    return axios.post(url, data);
}


export { getCountdowns, getCountdown, createCountdown };