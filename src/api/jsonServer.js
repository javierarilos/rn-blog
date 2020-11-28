import axios from 'axios';

export default axios.create({
    // copy from ngrok URL after doing npm run tunnel
    baseURL: 'http://07d475d5043f.ngrok.io'
});