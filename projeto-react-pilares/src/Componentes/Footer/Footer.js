import React from "react";
import { FooterContainer, DadosSpaceT, Criacao, Link } from "./footerStyle";

export function Footer() {
  return (
    <FooterContainer>
      <DadosSpaceT>
        <div>
          <h3>Sigam-nos</h3>
          <Link>Youtube</Link>
          <Link>Twitter</Link>
          <Link>Instagram</Link>
        </div>
        <div>
          <h3>Contato</h3>
          <p>(81) 9.8765-4321</p>
          <p>spacetd@spacetd.com</p>
        </div>
      </DadosSpaceT>
      <Criacao>
        <p>Desenvolvido por Analice Marques</p>
        <p>
          <a href="https://github.com/AnaliceMarques" target="blank">
            github.com/analicemarques
          </a>
        </p>
      </Criacao>
    </FooterContainer>
  );
}
