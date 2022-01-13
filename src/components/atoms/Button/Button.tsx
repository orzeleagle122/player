import React, {ButtonHTMLAttributes, FC, ReactChild, ReactNode} from 'react';
import styled, {css} from 'styled-components'

//TODO: jak aplikacja sie wlaczy sprzedzic czy rest?: ReactNode jest tu potrzebny


//interface AppProps extends React.ComponentPropsWithoutRef<'button'> {
interface AppProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactChild,
    rest?: ReactNode,
    secondary?: boolean,
    isBig?: boolean,
    isSmall?: boolean,
}

const ButtonWrapper = styled.button<AppProps>`
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

const Button: FC<AppProps> = ({children, ...rest}) => {
    return <ButtonWrapper {...rest}>{children}</ButtonWrapper>;
};

export default Button;


















