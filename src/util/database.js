import axios from 'axios';
const hostname = 'http://t-min.us:8080';


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

/*
const createCountdownEvent = (data) => {
    let url = hostname + '/countdown-event/'
    return axios.post(url, data);
}

const updateCountdown = (id, data) => {

}

const deleteCoutdown = (id) => {

}

const getCountdownEvent = (id) => {

}



const updateCountdownEvent = (id, data) => {

}

const deleteCountdownEvent = (id) => {

}
*/

export { getCountdowns, getCountdown, createCountdown };
