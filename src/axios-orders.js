import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-a32f5.firebaseio.com/'
});

export default instance;