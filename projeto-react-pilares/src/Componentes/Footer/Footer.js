import React from "react";
import {
  FooterContainer,
  DadosSpaceT,
  Apresentacao,
  Link,
} from "./footerStyle";

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
      <Apresentacao>
        <p>
          Criado por Analice Marques -{" "}
          <a href="https://github.com/AnaliceMarques" target="blank">
            github.com/analicemarques
          </a>
        </p>
      </Apresentacao>
    </FooterContainer>
  );
}
