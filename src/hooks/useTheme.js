import { useEffect, useState } from 'react'
import darkTheme from '../themes/darkTheme'
import lightTheme from '../themes/lightTheme'

const useTheme = () => {
  const ls = localStorage.getItem('theme')

  const initialTheme = ls && ls === 'dark' ? darkTheme : lightTheme

  const [theme, settheme] = useState(initialTheme)

  useEffect(() => {
    localStorage.setItem('theme', theme.title)
  }, [theme])

  return [theme, settheme]
}

export default useTheme
