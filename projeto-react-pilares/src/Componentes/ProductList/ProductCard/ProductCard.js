import { Card, Imagem, Informacao, Botao } from "./productCardStyle";

export const ProductCard = ({ product, adicionarProdutoCart }) => {
  return (
    <Card>
      <Imagem src={product.image} alt={product.name} /> <br />
      <h3>{product.name}</h3>
      <Informacao>
        {/* <p>Categoria: {product.category}</p> */}
        {/* <p>Descrição: {product.description}</p> */}
        <p>
          {product.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </Informacao>
      <Botao onClick={() => adicionarProdutoCart(product)}>
        Adicionar ao Carrinho
      </Botao>
    </Card>
  );
};
