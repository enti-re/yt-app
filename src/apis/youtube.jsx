import axios from 'axios';

const KEY = 'AIzaSyCZ-WqRzUZcat3bV512VgOmNxEsRNf9FqI';

const youtube = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    }
});

export default youtube;