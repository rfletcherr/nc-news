import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Header } from './Components/Header'
import { Articles } from './Components/Articles'
import { ArticlePage } from './Components/ArticlePage'
import { ArticleComments } from './Components/ArticleComments'

function App() {

  return (
    <>
    <Header />  
    <Routes>
      <Route path='/' element={<Articles />} />
      <Route path='/articles/:article_id' element={<ArticlePage />} />
      <Route path='/articles/:article_id/comments' element={<ArticleComments />} />
    </Routes>
    </>
  )
}

export default App
