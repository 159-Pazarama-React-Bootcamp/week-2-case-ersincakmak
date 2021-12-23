import { useEffect } from 'react'
import Header from './components/header'
import GetUsername from './components/modal/getUsername'
import UserContext from './context/userContext'
import useHasUserName from './hooks/useHasUsername'
import ResetCss from './utils/resetCss'

const App = () => {
  const [username, setUsername] = useHasUserName()

  return (
    <UserContext.Provider
      value={{
        username: username,
      }}
    >
      <ResetCss />
      <GetUsername isActive={!username} setUserName={setUsername} />
      <Header />
    </UserContext.Provider>
  )
}

export default App
