import GetUsername from './components/modal/getUsername'
import useHasUserName from './hooks/useHasUsername'
import ResetCss from './utils/resetCss'

const App = () => {
  const [username, setUsername] = useHasUserName()

  return (
    <>
      <ResetCss />
      <GetUsername isActive={!username} setUserName={setUsername} />
    </>
  )
}

export default App
