import styled from './ThemeColor.module.css'

import { useTheme } from '../hooks/useTheme'

import React from 'react'
import ModeIcon from '../assets/mode-icon.svg'
const themeColors = ['#58249c', '#249c6b', '#b70233']

function ThemeColor() {
  const { changeColor, changeMode, mode } = useTheme()
  const toggleMode = () => {
    changeMode(mode === 'dark' ? 'light' : 'dark')
  }
  console.log(mode)
  return (
    <div className={styled['theme-selector']}>
      <div className={styled['mode-toggle']}>
        <img
          onClick={toggleMode}
          src={ModeIcon}
          alt='change mode icon'
          style={{ filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)' }}
        />
      </div>
      <div className={styled['theme-buttons']}>
        {themeColors.map((color) => {
          return (
            <div
              key={color}
              onClick={() => changeColor(color)}
              style={{ background: color }}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ThemeColor
