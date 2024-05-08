import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ArticlePage = () => {
    const { article_id } = useParams()
    const [currentArticle, setCurrentArticle] = useState({})
    
    useEffect(() => {
        axios.get(`https://be-nc-news-wqd1.onrender.com/api/articles/${article_id}`)
        .then((response) => {
            
        })
    })
}