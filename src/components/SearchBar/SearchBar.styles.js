import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  padding: 0 20px;
  background: var(--darkGray);
  `
export const Content = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  position: relative;
  max-width: var(--maxWidth);
  width: 100%;
  height: 55px;
  background: var(--medGray);
  color: var(--white);
  border-radius: 40px;

  img {
    position: absolute;
    left: 15px;
    top: 14px;
    width: 30px;;
  }

  input {
    font-size: var(--fontL);
    position: absolute;
    left: 0;
    margin: 8px 0;
    padding:  0 0 0 60px;
    border: 0;
    width: 95%;
    background: transparent;
    height: 40px;
    color: var(--white);
    :focus {
      outline: none;
    }
  }
`