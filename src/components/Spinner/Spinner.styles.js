import styled from 'styled-components'

export const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 5px solid var(--lightGray);
  border-top: 5px solid var(--medGray);
  animation: spin .8s linear infinite;
  margin: 20px auto;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`