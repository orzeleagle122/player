import React from 'react';
import styled from 'styled-components'

const InputWrapper = styled.input`
  padding: 10px 20px;
  background-color: #213349;
  border: none;
  font-size: 18px;
  border-radius: 16px;
  position: relative;
  width: 100%;
  color: white;

  &::placeholder {
    color: #afafaf;
  }
`;

const Input = (props) => {
    return <InputWrapper {...props}>{props.children}</InputWrapper>;
};

export default Input;