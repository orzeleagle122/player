import styled from 'styled-components'

export const FormWrapper=styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    width: 80%;
  }
  
  p{
    color: red;
    font-weight: bold;
  }
`