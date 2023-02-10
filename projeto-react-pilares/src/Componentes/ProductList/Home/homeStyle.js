import styled from "styled-components";

export const HomeContainer = styled.div`
  padding: 0.5rem;
  margin: 0.125rem;
  display: flex;
  flex-direction: column;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  @media screen and (max-width: 860px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 429px) {
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: start;
    align-items: center;
  }
`;

export const Cards = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const Select = styled.select`
  margin: 0.25rem;
  border-radius: 0.25rem;
`;
