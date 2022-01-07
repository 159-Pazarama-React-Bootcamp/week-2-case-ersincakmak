import { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import Header from './components/header'
import GetUsername from './components/modal/getUsername'
import Page from './components/page'
import TodoList from './components/todoList'
import { UserContext } from './context/userContext'
import ResetCss from './utils/resetCss'

const App = () => {
  const { theme } = useContext(UserContext)

  return (
    <ThemeProvider theme={theme}>
      <ResetCss />
      <Page>
        <GetUsername />
        <Header />
        <TodoList />
      </Page>
    </ThemeProvider>
  )
}

export default App
