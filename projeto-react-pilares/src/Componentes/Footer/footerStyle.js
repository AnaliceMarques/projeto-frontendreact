import styled from "styled-components";

export const FooterContainer = styled.footer`
  margin-top: 0.75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 0.5rem;
  height: 9rem;
  width: 100%;
  background-color: black;

  @media screen and (max-width: 350px) {
    font-size: 0.8rem;
  }
`;

export const DadosSpaceT = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: start;
  margin: 0 0.5rem 1rem 0.5rem;
`;

export const Criacao = styled.div`
  text-align: center;
  font-size: 0.75rem;

  a {
    color: white;
    text-decoration: none;

    :hover {
      color: var(--blue-purple);
    }
    :active {
      color: var(--soft-white);
    }
  }
`;

export const Link = styled.p`
  cursor: pointer;

  :hover {
    color: var(--blue-purple);
  }
  :active {
    color: var(--soft-white);
  }
`;
