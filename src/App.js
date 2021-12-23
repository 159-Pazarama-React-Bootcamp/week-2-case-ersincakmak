import { useEffect, useState } from 'react'
import GetUsername from './components/modal/getUsername'
import useHasUserName from './hooks/useHasUsername'
import ResetCss from './utils/resetCss'

const App = () => {
  const [username, setUsername] = useHasUserName()
  const [isActive, setIsActive] = useState(true)

  return (
    <>
      <ResetCss />
      <GetUsername
        isActive={!username}
        setIsActive={setIsActive}
        setUserName={setUsername}
      />
    </>
  )
}

export default App
