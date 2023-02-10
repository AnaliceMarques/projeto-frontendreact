import { useState } from "react";
import { Card, Imagem, Informacao, Botao, Chave } from "./productCardStyle";

export const ProductCard = ({ product, adicionarProdutoCart }) => {
  const [detalhes, setDetalhes] = useState(true);

  const mudarCard = () => {
    setDetalhes(!detalhes);
  };

  return (
    <>
      {detalhes ? (
        <Card>
          <Imagem src={product.image} alt={product.name} /> <br />
          <h3>{product.name}</h3>
          <Informacao>
            <p>
              {product.price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </Informacao>
          <div>
            <Botao onClick={mudarCard}>Detalhes</Botao>
            <Botao onClick={() => adicionarProdutoCart(product)}>
              Adicionar
            </Botao>
          </div>
        </Card>
      ) : (
        <Card>
          <h3>{product.name}</h3>
          <Informacao>
            <p>
              <Chave>Categoria:</Chave> {product.category}
            </p>
            <p>
              <Chave>Descrição:</Chave> {product.description}
            </p>
            <p>
              <Chave>Duração:</Chave> {product.duration}
            </p>
            <p>
              <Chave>Preço:</Chave>{" "}
              {product.price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </Informacao>
          <div>
            <Botao onClick={mudarCard}>Voltar</Botao>
            <Botao onClick={() => adicionarProdutoCart(product)}>
              Adicionar
            </Botao>
          </div>
        </Card>
      )}
    </>
  );
};
