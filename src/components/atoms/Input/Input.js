import React from 'react';
import styled from 'styled-components'

const InputWrapper = styled.input`
  padding: 10px 20px;
  background-color: #ebedff;
  border: none;
  font-size: 18px;
  border-radius: 15px;
  position: relative;

`;

const Input = (props) => {
    return <InputWrapper {...props}>{props.children}</InputWrapper>;
};

export default Input;