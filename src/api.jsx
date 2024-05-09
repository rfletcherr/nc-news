import axios from 'axios'

export const getArticles = () => {
   return axios.get("https://robbies-articles-website.onrender.com/api/articles")
   .then((response) => {
    return response.data.articles
   })
}

export const getArticlePage = (article_id) => {
    return axios.get(`https://robbies-articles-website.onrender.com/api/articles/${article_id}`)
    .then((response) => {
        return response.data
    })
}

export const getComments = (article_id) => {
    return axios.get(`https://robbies-articles-website.onrender.com/api/articles/${article_id}/comments`)
    .then((response) => {
        return response.data.comments
    })
}