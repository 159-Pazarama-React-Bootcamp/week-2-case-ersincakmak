import React, { useContext, useState } from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { BsCheck } from 'react-icons/bs'
import { FaTimes } from 'react-icons/fa'
import { todoApi } from '../../constants/axios'
import { UserContext } from '../../context/userContext'
import EditTodo from '../modal/editTodo'
import Spinner from '../spinner'
import s from './style'

const Todo = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [loading, setLoading] = useState(false)

  const { setTodos, todos } = useContext(UserContext)

  const toggleCompleted = async () => {
    setLoading(true)
    try {
      const { data } = await todoApi.put(`todos/${todo.id}`, {
        isCompleted: !todo.isCompleted,
      })
      setTodos((ex) => ex.map((item) => (item.id === data.id ? data : item)))
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  const deleteTodo = async () => {
    setLoading(true)
    try {
      await todoApi.delete(`todos/${todo.id}`)
      const todoIndex = todos.indexOf(todo)
      setTodos([
        ...todos.slice(0, todoIndex),
        ...todos.slice(todoIndex + 1, todos.length),
      ])
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  return (
    <>
      <EditTodo todo={todo} isEditing={isEditing} setIsEditing={setIsEditing} />
      <s.container>
        {loading && (
          <s.loading>
            <Spinner size="medium" />
          </s.loading>
        )}
        <s.completedBox
          isCompleted={todo.isCompleted}
          onClick={toggleCompleted}
        >
          {todo.isCompleted ? <BsCheck /> : null}
        </s.completedBox>
        <s.content isCompleted={todo.isCompleted}>{todo.content}</s.content>
        <s.editBtn onClick={() => setIsEditing(true)}>
          <AiFillEdit />
        </s.editBtn>
        <s.removeBtn onClick={deleteTodo}>
          <FaTimes />
        </s.removeBtn>
      </s.container>
    </>
  )
}

export default Todo
