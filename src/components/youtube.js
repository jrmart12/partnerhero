import axios from 'axios';
const KEY = 'AIzaSyCiRRyet-mOsRcj_ABCjtdOMf0I9NqJw5A';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})