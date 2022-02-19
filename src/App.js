import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Create from './pages/Create'
import Recipe from './pages/Recipe'
import Search from './pages/Search'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useTheme } from './hooks/useTheme'
import ThemeColor from './components/ThemeColor'
function App() {
  const { mode } = useTheme()

  return (
    <Router>
      <div className={`App ${mode}`}>
        <Navbar />
        <ThemeColor />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/recipes/:id' element={<Recipe />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
