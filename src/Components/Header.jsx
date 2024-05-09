import { Link } from "react-router-dom"

export const Header = () => {
    
    return (
        <header className="topbar">
            <nav>
                <ul>
                    <li><Link to="/articles">Home</Link></li>
                </ul>
            </nav>
            </header>
)
}