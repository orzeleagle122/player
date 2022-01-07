import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("/assets/images/login-background.jpg") center center / cover no-repeat fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

export const Wrapper = styled.div`
  width: 500px;
  min-height: 400px;
  background: lightslategrey;
  border-radius: 20px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px 40px 20px;
  

  h1 {
    padding-bottom: 20px !important;
    margin-top: 40px;
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    width: 80%;
  }
  
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`

export const LogoWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;

  img {
    width: 150px;
  }

  h3 {
    margin: 0 auto 0 auto;
    padding-right: 170px;
  }
`;