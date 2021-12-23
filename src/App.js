import { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import Header from './components/header'
import GetUsername from './components/modal/getUsername'
import Page from './components/page'
import TodoList from './components/todoList'
import { UserContext } from './context/userContext'
import ResetCss from './utils/resetCss'

const App = () => {
  const { theme, username, setUsername } = useContext(UserContext)

  return (
    <ThemeProvider theme={theme}>
      <ResetCss />
      <Page>
        <GetUsername isActive={!username} setUserName={setUsername} />
        <Header />
        <TodoList />
      </Page>
    </ThemeProvider>
  )
}

export default App
