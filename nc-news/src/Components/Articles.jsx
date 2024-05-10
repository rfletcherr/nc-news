import { useState, useEffect } from "react";
import axios from "axios";
import { ArticleCard } from "./ArticleCard";

export const Articles = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get("https://robbies-articles-website.onrender.com/api/articles")
        .then((response) => {
            setArticles(response.data.articles)
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])
    return (
        <main>
            <ul className='articles'>
                {articles.map(article => (
                    <ArticleCard article={article} />
                ))}
            </ul>
        </main>
    );
}
