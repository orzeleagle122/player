import styled from 'styled-components';
import Slider from "react-slick";

export const Container = styled.div`
  height: 400px;
  background-color: darkblue;
  max-width: 1290px;
`;

export const Carousel = styled(Slider)`
  margin-top: 20px;

  ul li button {

    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
  }

  div {
    height: 250px;
    border: 2px solid red;
  }
`;