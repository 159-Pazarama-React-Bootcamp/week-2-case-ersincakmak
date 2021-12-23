import styled from 'styled-components'

const spinner = styled.span`
  aspect-ratio: 1;
  width: ${(props) =>
    props.size === 'large' ? '40px' : props.size === 'small' ? '20px' : '30px'};
  border: 2px solid;
  border-color: ${(props) => props.theme.colors.textRegular};
  border-bottom-color: transparent;
  border-radius: 50%;
  animation: spin 0.5s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`
const s = { spinner }
export default s
