import axios from 'axios';
const KEY = 'AIzaSyAFJpQglv8jt3eQeBnAEJ59wM7WZExuES0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/videos',
    params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 4,
        key: KEY
    }
});
