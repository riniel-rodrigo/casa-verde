import styled from "styled-components";
import heroTree from "../../../../assets/hero-tree.svg";

export const containerHero = styled.div`
  display: flex;
  justify-content: center;

  background-image: url(${heroTree});
  background-repeat: no-repeat;
  background-position: 80% -50px;
  background-size: 43.75rem auto;
`;

export const Hero = styled.section`
  width: 70%;
`;

export const section1 = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 7rem;
  width: 36.563rem;
  height: 51rem;

  span {
    font-weight: 400;
    font-size: 1.375rem;
    line-height: 1.676rem;
    color: #8b8b8b;
  }
`;

export const div1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  p {
    width: 29rem;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.676rem;
    color: #8b8b8b;
  }
`;
