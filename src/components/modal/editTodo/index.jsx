import { useFormik } from 'formik'
import { AnimatePresence } from 'framer-motion'
import React, { useContext, useState } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import * as Yup from 'yup'
import { todoApi } from '../../../constants/axios'
import { UserContext } from '../../../context/userContext'
import Spinner from '../../spinner'
import s from './style'

const EditTodo = ({ todo, setIsEditing, isEditing }) => {
  const [loading, setLoading] = useState(false)

  const { setTodos } = useContext(UserContext)

  const formik = useFormik({
    initialValues: {
      content: todo.content,
    },
    validationSchema: Yup.object({
      content: Yup.string()
        .min(3, 'Must be 3 characters or more')
        .required('Required'),
    }),
    onSubmit: async (values) => {
      setLoading(true)
      const { data } = await todoApi.put(`todos/${todo.id}`, {
        content: values.content,
      })
      setTodos((ex) => ex.map((item) => (item.id === data.id ? data : item)))
      setLoading(false)
      setIsEditing(false)
    },
  })

  return (
    <AnimatePresence>
      {isEditing && (
        <s.modalContainer>
          <OutsideClickHandler onOutsideClick={() => setIsEditing(false)}>
            <s.modal
              onSubmit={formik.handleSubmit}
              initial={{ opacity: 0, y: -200 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -200 }}
            >
              <s.modalTitle>Edit Todo</s.modalTitle>
              <s.inputContainer>
                <s.input
                  id="content"
                  name="content"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.content}
                  error={formik.touched.content && formik.errors.content}
                  tabIndex={1}
                />
                {formik.touched.content && formik.errors.content ? (
                  <s.inputError>{formik.errors.content}</s.inputError>
                ) : null}
              </s.inputContainer>
              <s.modalButton type="submit" tabIndex={2}>
                {loading ? <Spinner size="small" /> : 'Save'}
              </s.modalButton>
            </s.modal>
          </OutsideClickHandler>
        </s.modalContainer>
      )}
    </AnimatePresence>
  )
}

export default EditTodo
