import styled from "styled-components";

export const CartContainer = styled.div`
  padding: 0.75rem;
  margin: 0.5rem;
  border: 0.125rem solid var(--deep-blue-secondary);
  border-radius: 0.5rem;
  min-width: 225px;
`;

export const Item = styled.div`
  border-bottom: 0.125rem solid var(--deep-blue-secondary);
  margin-bottom: 0.25rem;
  padding-bottom: 0.25rem;
`;

export const Produto = styled.div`
  display: grid;
  grid-template-columns: 45px 4fr 1fr;
  align-items: center;
`;

export const Imagem = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.25rem;
`;

export const Quantidade = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Botao = styled.button`
  border: none;
  color: white;
  background: none;
  cursor: pointer;

  :hover {
    transition: all 0.4s;
    color: var(--deep-blue-secondary);
  }

  :active {
    color: white;
  }
`;

export const Contador = styled.div`
  text-align: center;
  color: white;
`;

export const BotaoContador = styled.button`
  background: none;
  border: none;
  color: white;
  width: 1rem;
  font-size: 1.25rem;
  cursor: pointer;
`;

export const Total = styled.div`
  display: flex;
  justify-content: end;
`;
