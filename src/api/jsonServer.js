import axios from 'axios';

export default axios.create({
    // copy from ngrok URL after doing npm run tunnel
    baseURL: 'http://9f9597601b60.ngrok.io'
});