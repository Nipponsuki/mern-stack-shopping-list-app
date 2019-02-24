import styled from "styled-components";
import bgk from "../assets/images/bgk.jpg";

export const Grid = styled.div`
  display: flex;
  height: 80vh;
  margin: 5rem 8rem;
  box-shadow: -1px 1px 21px -1px rgba(255, 255, 255, 0.75);
  border-radius: 5px;
  overflow: hidden;

  @media (max-width: 500px) {
    margin: 0.1rem;
    height: 100vh;
  }
`;
export const Left = styled.div`
  flex: 0 0 18%;
  background: goldenrod;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background-image: linear-gradient(45deg, #e0eafc, #cfdef3);
  color: #fff;
  box-shadow: inset -2px -1px 16px -2px rgba(0, 0, 0, 0.75);
  z-index: -1;

  @media (max-width: 500px) {
    display: none;
  }
`;
export const Right = styled.div`
  display: flex;
  flex: 1;
  background: greenyellow;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-image: linear-gradient(
      45deg,
      rgba(0, 4, 40, 0.6),
      rgba(0, 78, 146, 0.6)
    ),
    url(${bgk});
  background-size: cover;
  background-position: center center;
  color: #fff;
  overflow-y: auto;
`;
