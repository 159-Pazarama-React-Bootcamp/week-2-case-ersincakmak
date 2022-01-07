import { motion } from 'framer-motion'
import styled from 'styled-components'

const inputContainer = styled.div`
  position: relative;
`

const input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  padding: 0.75em;
  border: 2px solid;
  border-color: ${(props) =>
    props.error ? props.theme.colors.error.bg : 'rgb(145, 145, 145)'};
  border-radius: 5px;
  background-color: transparent;
  color: ${(props) => props.theme.colors.textRegular};

  &:focus,
  &:active {
    border-color: ${(props) =>
      props.error
        ? props.theme.colors.error.bg
        : props.theme.colors.textRegular};
  }
`
const inputError = styled.p`
  position: absolute;
  bottom: -0.25rem;
  transform: translateY(100%);
  font-size: 0.75rem;
  color: ${(props) => props.theme.colors.error.bg};
`

const modalContainer = styled(motion.div)`
  position: absolute;
  inset: 0;
  z-index: 999999;
  background-color: ${(props) => props.theme.colors.bgRegular};
`

const modal = styled(motion.form)`
  background-color: ${(props) => props.theme.colors.bgModal};
  border-radius: 5px;
  padding: 1em;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  width: min(350px, 100%);
  margin-inline: auto;
  margin-top: 2em;
  color: ${(props) => props.theme.colors.textRegular};
`

const modalTitle = styled.h3`
  font-weight: 600;
`
const modalButton = styled.button`
  padding: 0.55em 0.75em;
  font-size: 0.875rem;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.primary};
  align-self: flex-end;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryHover};
  }
`

const s = {
  inputContainer,
  input,
  inputError,
  modalContainer,
  modal,
  modalTitle,
  modalButton,
}

export default s
