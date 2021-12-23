import styled from 'styled-components'

const pageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.bgRegular};
`
const s = {
  pageContainer,
}

export default s
