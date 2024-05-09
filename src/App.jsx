import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Header } from './Components/Header'
import { Articles } from './Components/Articles'
import { ArticlePage } from './Components/ArticlePage'

function App() {

  return (
    <>
    <Header />  
    <Routes>
      <Route path='/' element={<Articles />} />
      <Route path='/articles/:article_id' element={<ArticlePage />} />
    </Routes>
    </>
  )
}

export default App
