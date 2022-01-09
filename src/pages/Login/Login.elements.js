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
  background-color: #0e161f;
  border-radius: 20px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px 40px 20px;

  h2 {
    padding-bottom: 20px;
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
  
  @media screen and (max-width: 422px){
    flex-direction: column;
    gap: 1px;
    align-items: center;
  }
  
`

export const LogoWrapper = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr 120px;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;

  img {
    width: 120px;
  }

  h3 {
    margin: 0 auto 0 auto !important;
  }
`;

export const Separator = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 80%;
  align-items: center;
  color: white;
  gap: 10px;
  margin-top: 10px;
  height: 50px;
  font-size: 20px;
  padding-left: 50px;
  padding-right: 50px;

  hr {
    width: 100%;
  }
`;