import { useContext, useEffect, useState } from 'react'
import AddTodo from '../addTodo'
import s from './style'
import { UserContext } from '../../context/userContext'
import { todoApi } from '../../constants/axios'
import Todo from '../todo'
import Spinner from '../spinner'

const TodoList = () => {
  const [loading, setLoading] = useState(false)

  const { todos, setTodos } = useContext(UserContext)

  const getTodos = async () => {
    setLoading(true)
    const { data } = await todoApi.get('/todos')
    setTodos(data)
    setLoading(false)
  }

  useEffect(() => {
    getTodos()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <s.todoList>
      <s.container>
        <s.title>~ Task List ~</s.title>
        <AddTodo />
        {loading ? (
          <s.loading>
            <Spinner size="large" />
          </s.loading>
        ) : (
          todos.map((todo) => <Todo key={`todo-key-${todo.id}`} todo={todo} />)
        )}
      </s.container>
    </s.todoList>
  )
}

export default TodoList
