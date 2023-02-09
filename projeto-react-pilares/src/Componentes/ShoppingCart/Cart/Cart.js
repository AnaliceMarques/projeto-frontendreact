import {
  Botao,
  CartContainer,
  Imagem,
  Item,
  Produto,
  Quantidade,
  Contador,
  BotaoContador,
} from "./cartStyle";

export const Cart = ({ cart, setCart, amount, setAmount }) => {
  //função para calcular o valor total
  const calcValorTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const removerProdutoCart = (produto) => {
    const listaSemProduto = cart.filter((item) => item !== produto);

    setCart(listaSemProduto);
  };

  const adicionarUm = (id) => {
    const novoArray = cart.map((item) => {
      if (item.id === id) {
        item.quantity = item.quantity + 1;
      }
      return item;
    });
    setCart(novoArray);
  };

  const diminuirUm = (produto, id) => {
    if (produto.quantity > 1) {
      const novoArray = cart.map((item) => {
        if (item.id === id) {
          item.quantity = item.quantity - 1;
        }
        return item;
      });
      setCart(novoArray);
    } else {
      removerProdutoCart(produto);
    }
  };

  const valorTotalPorItem = (produto) => {
    const total = produto.price * produto.quantity;
    return total;
  };

  return (
    <CartContainer>
      <h2>Carrinho</h2>
      <br />

      {cart.map((product) => (
        <div key={product.id}>
          <Item>
            <Produto>
              <Imagem src={product.image} alt={product.name} />
              <div>
                <p>{product.name}</p>
                <p>
                  {product.price.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </div>
              <Botao onClick={() => removerProdutoCart(product)}>
                <span className="material-symbols-outlined">delete</span>
              </Botao>
            </Produto>
            <Quantidade>
              <Contador>
                <BotaoContador
                  onClick={() => {
                    diminuirUm(product, product.id);
                  }}
                >
                  -
                </BotaoContador>
                {product.quantity}
                <BotaoContador
                  onClick={() => {
                    adicionarUm(product.id);
                  }}
                >
                  +
                </BotaoContador>
              </Contador>
              <p>
                {valorTotalPorItem(product).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </Quantidade>
          </Item>
        </div>
      ))}

      <span>
        Total:{" "}
        {calcValorTotal().toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </span>
    </CartContainer>
  );
};
