import axios from "axios"


const KEY = 'AIzaSyA8xXdEfY1S568BO5YZCzIXSmFtTXNaBco'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 15,
        key: KEY
    }
})