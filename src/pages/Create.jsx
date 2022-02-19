import React from 'react'
import styled from './Create.module.css'
import { useState, useRef, useEffect } from 'react'
import { useFetch } from '../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
function Create() {
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [newIngredient, setNewIngredient] = useState('')
  const ingredientInput = useRef(null)
  const [ingredients, setIngredients] = useState([])
  const navigate = useNavigate()
  const { postData, data, error } = useFetch(
    'http://localhost:3000/recipes',
    'POST'
  )

  const handleSubmit = (e) => {
    console.log(method)
    e.preventDefault()
    postData({
      title,
      ingredients,
      method,
      cookingTime: cookingTime + ' minutes',
    })
  }
  const handleAdd = (e) => {
    e.preventDefault()
    const ing = newIngredient.trim()
    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevIng) => [...prevIng, ing])
    }
    setNewIngredient('')
    ingredientInput.current.focus()
  }

  useEffect(() => {
    if (data) {
      navigate('/')
    }
  }, [data])

  return (
    <div className={styled['create']}>
      <h2 className='page-title'>Add a new Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe title:</span>
          <input
            type='text'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>
        <label>
          <span>Recipe ingredients: </span>
          <div className={styled['ingredients']}>
            <input
              type='text'
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput}
            />
            <button onClick={handleAdd} className={styled['btn']}>
              add
            </button>
          </div>
        </label>
        <p>
          Current Ingredients:{' '}
          {ingredients.map((ing) => (
            <em key={ing}> {ing}, </em>
          ))}{' '}
        </p>
        <label>
          <span>Recipe method:</span>
          <textarea onChange={(e) => setMethod(e.target.value)} required />
        </label>
        <label>
          <span>Cooking Time (minutes): </span>
          <input
            type='number'
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>
        <button className={styled['btn']}>submit</button>
      </form>
    </div>
  )
}

export default Create
