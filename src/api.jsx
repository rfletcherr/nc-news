import axios from 'axios'

export const api = (url, type='get', body) => {
    if (type === 'get') {
        return axios.get(`https://be-nc-news-wqd1.onrender.com/api/${url}`)
    }
}