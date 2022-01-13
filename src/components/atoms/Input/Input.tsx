import React, {FC, InputHTMLAttributes, ReactNode} from 'react';
import styled from 'styled-components'

// interface AppProps extends InputHTMLAttributes<HTMLInputElement>{
interface AppProps extends InputHTMLAttributes<HTMLInputElement>{
    label?:string
    rest?: ReactNode,
}

const InputWrapper = styled.input`
  padding: 10px 20px;
  background-color: #213349;
  border: none;ó
  font-size: 18px;
  border-radius: 16px;
  position: relative;
  width: 100%;
  color: white;

  &::placeholder {
    color: #afafaf;
  }
`;

const Input: FC<AppProps> = ({children, ...rest}) => {
    return <InputWrapper {...rest}/>;
};

export default Input;