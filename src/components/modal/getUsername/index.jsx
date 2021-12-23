import { useFormik } from 'formik'
import { AnimatePresence } from 'framer-motion'
import React from 'react'
import * as Yup from 'yup'
import s from './style'

const GetUsername = ({ isActive, setUserName }) => {
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
      setUserName(values.username)
    },
  })

  return (
    <AnimatePresence>
      {isActive && (
        <s.modalContainer>
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
              />
              {formik.touched.username && formik.errors.username ? (
                <s.inputError>{formik.errors.username}</s.inputError>
              ) : null}
            </s.inputContainer>
            <s.modalButton type="submit">Save</s.modalButton>
          </s.modal>
        </s.modalContainer>
      )}
    </AnimatePresence>
  )
}

export default GetUsername
