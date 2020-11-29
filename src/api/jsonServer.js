import axios from 'axios';

export default axios.create({
    // copy from ngrok URL after doing npm run tunnel
    baseURL: 'http://94e7a9f1ff70.ngrok.io'
});