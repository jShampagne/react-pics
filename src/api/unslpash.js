import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID edc63ee8ea3a8439acc896c9503dc40094c057a58f7f4a729f1432687bf86ec6'
    }
});
