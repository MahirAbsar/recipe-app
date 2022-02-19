import React from 'react'
import style from './Navbar.module.css'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'

function Navbar() {
  const { color, changeMode, mode } = useTheme()

  return (
    <div className={style['navbar']} style={{ background: color }}>
      <nav>
        <Link to='/' className={style['brand']}>
          <h1>Cooking Expert</h1>
        </Link>
        <SearchBar />
        <Link to='/create'>Create Recipe</Link>
      </nav>
    </div>
  )
}

export default Navbar
