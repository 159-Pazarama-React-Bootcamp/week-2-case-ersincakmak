import styled from 'styled-components'

const header = styled.div`
  padding: 1em 2em;
  background-color: ${(props) => props.theme.colors.bgHeader};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  color: ${(props) => props.theme.colors.textRegular};
`
const s = {
  header,
}

export default s
