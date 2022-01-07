import React, { useContext } from 'react'
import { UserContext } from '../../context/userContext'
import ThemeSwitcher from '../themeSwitcher'
import s from './style'

const Header = () => {
  const { username } = useContext(UserContext)

  return (
    <s.header>
      <p>{username}</p>
      <ThemeSwitcher />
    </s.header>
  )
}

export default Header
