import axios from 'axios';

export default axios.create({
    baseURL:'https://cors-anywhere.herokuapp.com/https://intense-lowlands-41245.herokuapp.com',
    headers: {
        "Content-type": "application/x-www-form-urlencoded"
    }
})