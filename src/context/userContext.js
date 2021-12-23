import { createContext, useState } from 'react'
import useHasUserName from '../hooks/useHasUsername'
import useTheme from '../hooks/useTheme'

export const UserContext = createContext()

const UserContextProvider = ({ children }) => {
  const [username, setUsername] = useHasUserName()
  const [theme, setTheme] = useTheme()
  const [todos, setTodos] = useState([])

  const constextValue = {
    username,
    setUsername,
    theme,
    setTheme,
    todos,
    setTodos,
  }

  return (
    <UserContext.Provider value={constextValue}>
      {children}
    </UserContext.Provider>
  )
}
export default UserContextProvider
