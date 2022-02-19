import React from 'react'
import styled from './SearchBar.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function SearchBar() {
  const [term, setTerm] = useState('')
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search?q=${term}`)
  }
  return (
    <div className={styled['searchbar']}>
      <form onSubmit={handleSubmit}>
        <label htmlFor='search'>Search: </label>
        <input
          type='text'
          id='search'
          required
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>
    </div>
  )
}

export default SearchBar
