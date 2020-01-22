import axios from 'axios';

export default axios.create({
    baseURL: process.env.REACT_APP_STREAM_API_URL
});
