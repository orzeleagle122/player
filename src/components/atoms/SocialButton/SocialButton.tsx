import React, {FC, ReactChild, ReactNode} from 'react';
import styled, {css} from 'styled-components'

interface ISocialBtn {
    facebook?: boolean,
    apple?: boolean,
}

interface AppProps {
    children: ReactChild,
    rest: ReactNode
}

const ButtonWrapper = styled.button<ISocialBtn>`
  text-transform: uppercase;
  height: 38px;
  width: 100%;
  padding: 5px 10px;
  color: white;
  font-weight: 700;
  font-size: 12px;
  margin-top: 10px;
  border-radius: 16px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  transition: all 0.2s ease-in-out;

  svg {
    font-size: 20px;
  }

  &:hover {
    opacity: 0.8;
  }

  ${({facebook}) => facebook && css`
    background-color: #1977F2;
  `}

  ${({apple}) => apple && css`
    background-color: black;
  `}

`;

const SocialButton: FC<AppProps> = ({children, ...rest}) => {
    return <ButtonWrapper {...rest}>{children}</ButtonWrapper>;
};

export default SocialButton;