import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import s from './style'
import * as Yup from 'yup'
import { todoApi } from '../../constants/axios'
import { UserContext } from '../../context/userContext'
import Spinner from '../spinner'

const AddTodo = () => {
  const [loading, setLoading] = useState(false)

  const { setTodos } = useContext(UserContext)

  const formik = useFormik({
    initialValues: {
      content: '',
    },
    validationSchema: Yup.object({
      content: Yup.string()
        .min(3, 'Must be 3 character or more')
        .required('Required'),
    }),
    onSubmit: async (values, formikHelpers) => {
      setLoading(true)
      try {
        const { data } = await todoApi.post('todos', {
          content: values.content.trim(),
        })
        setTodos((ex) => [...ex, data])
        formikHelpers.resetForm()
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    },
  })

  return (
    <s.container onSubmit={formik.handleSubmit}>
      <s.input
        id="content"
        name="content"
        value={formik.values.content}
        error={formik.touched.content && formik.errors.content}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Add todo"
        autoComplete="off"
        tabIndex={1}
      />
      {formik.touched.content && formik.errors.content ? (
        <s.inputError>{formik.errors.content}</s.inputError>
      ) : null}
      <s.button type="submit" tabIndex={2}>
        {loading ? <Spinner size="small" /> : 'Add'}
      </s.button>
    </s.container>
  )
}

export default AddTodo
