import React, { useContext } from 'react'
import { GiMoonBats } from 'react-icons/gi'
import { UserContext } from '../../context/userContext'
import darkTheme from '../../themes/darkTheme'
import lightTheme from '../../themes/lightTheme'
import s from './style'

const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(UserContext)

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? lightTheme : darkTheme)
  }
  return (
    <s.switcherBtn onClick={toggleTheme}>
      <GiMoonBats />
    </s.switcherBtn>
  )
}

export default ThemeSwitcher
