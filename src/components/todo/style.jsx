import styled from 'styled-components'

const container = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 1em;
  background-color: ${(props) => props.theme.colors.bgModal};
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  transition: background 0.2s ease;
`

const loading = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 99;
  pointer-event: none;
`

const removeBtn = styled.button`
  padding: 0.5em 0.75em;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.error.bg};
  cursor: pointer;
  transition: color 0.2s ease;
  display: flex;
  align-items: center;
  justif-content: center;

  svg {
    color: ${(props) => props.theme.colors.error.text};
  }
`

const editBtn = styled(removeBtn)`
  background-color: ${(props) => props.theme.colors.edit.bg};
  svg {
    color: ${(props) => props.theme.colors.edit.text};
  }
`

const completedBox = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  border: 2px solid;
  border-color: ${(props) =>
    props.isCompleted
      ? props.theme.colors.primary
      : props.theme.colors.textRegular};
  cursor: pointer;
  transition: color 0.2s ease;

  svg {
    color: ${(props) => props.theme.colors.primary};
  }
`

const content = styled.p`
  flex: 1;
  padding: 0.5em;
  border-radius: 5px;
  background-color: transparent;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.textRegular};
  text-decoration: ${(props) => (props.isCompleted ? 'line-through' : 'none')};
`

const s = {
  container,
  removeBtn,
  content,
  completedBox,
  loading,
  editBtn,
}

export default s
