import { useFormik } from 'formik'
import { AnimatePresence } from 'framer-motion'
import React, { useContext } from 'react'
import * as Yup from 'yup'
import { UserContext } from '../../../context/userContext'
import s from './style'

const GetUsername = () => {
  const { setUsername, username } = useContext(UserContext)

  const formik = useFormik({
    initialValues: {
      username: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, 'Must be 3 characters or more')
        .required('Required'),
    }),
    onSubmit: (values) => {
      setUsername(values.username)
    },
  })

  return (
    <AnimatePresence>
      {(!username || username === 'null') && (
        <s.modalContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <s.modal
            onSubmit={formik.handleSubmit}
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -200 }}
          >
            <s.modalTitle>Tell us who you are?</s.modalTitle>
            <s.inputContainer>
              <s.input
                id="username"
                name="username"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
                placeholder="Your name"
                error={formik.touched.username && formik.errors.username}
                autoComplete="off"
                tabIndex={1}
              />
              {formik.touched.username && formik.errors.username ? (
                <s.inputError>{formik.errors.username}</s.inputError>
              ) : null}
            </s.inputContainer>
            <s.modalButton type="submit" tabIndex={2}>
              Save
            </s.modalButton>
          </s.modal>
        </s.modalContainer>
      )}
    </AnimatePresence>
  )
}

export default GetUsername
