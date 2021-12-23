import React, { useContext } from 'react'
import UserContext from '../../context/userContext'
import s from './style'

const Header = () => {
  const { username } = useContext(UserContext)

  return (
    <s.header>
      <p>{username}</p>
    </s.header>
  )
}

export default Header
