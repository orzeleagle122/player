import React, {FC, ReactChild, ReactNode} from 'react';
import styled from 'styled-components'

interface AppProps {
    children: ReactChild,
    rest: ReactNode,
    id?:string,
}

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

const Input: FC<AppProps> = ({children, ...rest}) => {
    return <InputWrapper {...rest}>{children}</InputWrapper>;
};

export default Input;