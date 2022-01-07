import styled from 'styled-components'

const todoList = styled.div`
  flex: 1;
  overflow: auto;
`

const container = styled.div`
  margin-top: 2rem;
  margin-inline: auto;
  width: min(500px, 100%);
  color: ${(props) => props.theme.colors.textRegular};
  transition: color 0.2s ease;

  display: flex;
  flex-direction: column;
  gap: 20px;
`

const title = styled.h4`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
`

const loading = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

const s = { todoList, container, title, loading }

export default s
