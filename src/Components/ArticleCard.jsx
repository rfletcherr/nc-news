import { Link } from 'react-router-dom';

export const ArticleCard = ({article}) => {
    return (
        <li key={article.id}>
            <img src={article.article_img_url} />
            <h3>{article.title}</h3>
            <p>{article.author}</p>
            <p>Topic: {article.topic}</p>
            <p>Comments: {article.comment_count}</p>
            <p>Votes: {article.votes}</p>
            <Link to={`/articles/${article.article_id}`}>View Article</Link>
                
        </li>
    )
}