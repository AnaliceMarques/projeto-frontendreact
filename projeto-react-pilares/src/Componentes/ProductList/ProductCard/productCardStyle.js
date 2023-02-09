import styled from "styled-components";

export const Card = styled.div`
  border: 0.125rem solid var(--deep-blue-secondary);
  border-radius: 1.25rem;
  width: 15.5rem;
  height: 18.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;

  :hover {
    scale: 1.04;
    transition: all 0.4s;
    border: 0.125rem solid var(--magenta);
  }
`;

export const Imagem = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 5rem;
`;

export const Botao = styled.button`
  margin-top: 0.5rem;
  padding: 0.5rem;
  border-radius: 1rem;
  border: none;
  color: var(--blue-purple);
  background-color: white;

  :hover {
    transition: all 0.4s;
    background-color: var(--magenta);
    color: white;
    cursor: pointer;
  }

  :active {
    color: var(--blue-purple);
    background-color: white;
  }
`;

export const Informacao = styled.div`
  justify-self: start;
  text-align: justify;
`;
