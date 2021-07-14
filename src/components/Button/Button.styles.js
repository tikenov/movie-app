import styled from 'styled-components'

export const Wrapper = styled.button`
  display: block;
  background: var(--darkGray);
  width: 25%;
  min-width: 200px;
  height: 60px;
  border-radius: 30px;
  color: var(--white);
  border:0;
  margin: 20px auto;
  font-size: var(--fontL);
  transition: all 0.3s;
  outline: none;
  cursor: pointer;
  :hover{
    opacity: .8;
  }
`