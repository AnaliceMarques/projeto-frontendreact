import styled from "styled-components";

export const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1.25rem 1fr 1fr;
  justify-content: start;
  align-items: center;
  gap: 0.75rem;
  margin: 0.5rem;
`;

export const Ordenacao = styled.div`
  grid-column: 3;
  justify-self: end;
`;

export const Select = styled.select`
  margin: 0.25rem;
  border-radius: 0.25rem;
`;
