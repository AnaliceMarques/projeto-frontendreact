import styled from "styled-components";

export const FilterContainer = styled.div`
  padding: 0.75rem;
  margin: 0.5rem;
  border: 0.125rem solid var(--deep-blue-secondary);
  border-radius: 0.5rem;
  min-width: 225px;
  /* @media screen and (max-width: 800px) {
    margin: 0.125rem;
  } */
`;

export const CamposDeBusca = styled.div`
  margin-top: 1rem;
  @media screen and (max-width: 800px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 0.25rem;
    /* border: 1px solid black; */
  }
`;

export const Input = styled.input`
  border-radius: 1rem;
  padding: 0.25rem 0.5rem;
  color: var(--blue-purple);
  border: none;
  margin: 0.25rem;
`;
