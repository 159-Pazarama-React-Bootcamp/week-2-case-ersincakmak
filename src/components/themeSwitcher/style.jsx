import styled from 'styled-components'

const switcherBtn = styled.button`
  background-color: transparent;
  border-radius: 5px;
  padding: 0.3125rem;
  aspect-ratio: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justift-content: center;
  font-size: 20px;
  background-color: ${(props) =>
    props.theme.title === 'dark'
      ? 'rgba(255, 255, 255, 0.5)'
      : 'rgba(0, 0, 0, 0.5)'};

  &:hover {
    background-color: ${(props) =>
      props.theme.title === 'dark'
        ? 'rgba(255, 255, 255, 0.3)'
        : 'rgba(0, 0, 0, 0.7)'};
  }

  svg {
    color: ${(props) => props.theme.colors.bgRegular};
  }
`
const s = {
  switcherBtn,
}

export default s
