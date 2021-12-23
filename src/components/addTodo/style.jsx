import styled from 'styled-components'

const container = styled.form`
  display: flex;
  gap: 10px;
  position: relative;
  margin-bottom: 10px;
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
  font-size: 0.875rem;

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
const button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75px;
  font-size: 0.875rem;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.textRegular};
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryHover};
  }
`
const s = {
  container,
  input,
  inputError,
  button,
}

export default s
