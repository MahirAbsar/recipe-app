import React from 'react'
import './Recipe.css'
import { useFetch } from '../hooks/useFetch'
import { useTheme } from '../hooks/useTheme'
import { useParams } from 'react-router-dom'
function Recipe() {
  const { mode } = useTheme()
  const { id } = useParams()
  const { data, isPending, error } = useFetch(
    ' http://localhost:3000/recipes/' + id
  )
  return (
    <div className={`recipe ${mode}`}>
      {error && <p className='error'> {error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {data && (
        <>
          <h2 className='page-title'>{data.title}</h2>
          <p>Takes {data.cookingTime} to cook.</p>
          <ul>
            {data.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p className={'method'}>{data.method}</p>
        </>
      )}
    </div>
  )
}

export default Recipe
