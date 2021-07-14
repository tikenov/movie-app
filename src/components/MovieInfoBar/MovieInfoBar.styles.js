import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 100px;
  background: var(--darkGray);
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  width: 100%;
  margin: 0 auto;
  
  .column {
    color: var(--white);
    margin: 0 20px;
    border-radius: 20px;
    background: var(--medGray);
    display: flex;
    align-items: center;
    justify-content: center;
    flex:1;
    :first-child {
      margin-left: 0;
    }
    :first-right {
      margin-left: 0;
    }
  }
  @media (max-width: 768px){
      display: block;
      .column {
        margin: 20px 0;
      }
  }
`;