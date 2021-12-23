import { ThemeProvider } from 'styled-components'
import Header from './components/header'
import GetUsername from './components/modal/getUsername'
import Page from './components/page'
import UserContext from './context/userContext'
import useHasUserName from './hooks/useHasUsername'
import useTheme from './hooks/useTheme'
import ResetCss from './utils/resetCss'

const App = () => {
  const [username, setUsername] = useHasUserName()
  const [theme, setTheme] = useTheme()

  const constextValue = {
    username,
    theme,
    setTheme,
  }

  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={constextValue}>
        <ResetCss />
        <Page>
          <GetUsername isActive={!username} setUserName={setUsername} />
          <Header />
        </Page>
      </UserContext.Provider>
    </ThemeProvider>
  )
}

export default App
