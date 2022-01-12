import React, {FC} from 'react';
import styled, {css} from 'styled-components'

interface IBtn {
    secondary: boolean,
    isBig: boolean,
    isSmall: boolean,
}

interface AppProps {
    rest: any,
    children: any
}

const ButtonWrapper = styled.button<IBtn>`
  height: 38px;
  width: 156px;
  padding: 5px 10px;
  background-color: #2d3ddf;
  color: white;
  font-weight: 700;
  font-size: 15px;
  margin-top: 20px;
  border-radius: 16px;
  border: #2d3ddf;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  &:hover {
    opacity: 0.8;
  }

  ${({secondary}) => secondary && css`
    background-color: gray;
    border: gray;
  `}

  ${({isBig}) => isBig && css`
    width: 200px;
  `}

  ${({isSmall}) => isSmall && css`
    width: 70px;
    height: 30px;
    font-size: 9px;
    margin: 10px;
  `}

`;

const Button:FC<AppProps> = ({rest,children}) => {
    return <ButtonWrapper {...rest}>{children}</ButtonWrapper>;
};

export default Button;