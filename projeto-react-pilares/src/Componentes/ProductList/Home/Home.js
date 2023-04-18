import React from "react";
import { useState } from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import { HomeContainer, Select, Info, Cards } from "./homeStyle";

export const Home = ({
  productsList,
  nameFilter,
  minPriceFilter,
  maxPriceFilter,
  cart,
  setCart,
}) => {
  const [ordem, setOrdem] = useState("");
  const handleOrdem = (e) => {
    setOrdem(e.target.value);
  };

  const adicionarProdutoCart = (produto) => {
    const existeProdutoCart = cart.find((prod) => prod.id === produto.id);
    if (existeProdutoCart) {
      const novoArray = cart.map((item) => {
        if (item.id === produto.id) {
          if (item.quantity === item.seats) {
            alert(
              "Quantidade máxima atingida! Não é mais possível adicionar este item ao carrinho."
            );
          } else {
            item.quantity = item.quantity + 1;
          }
        }
        return item;
      });
      setCart(novoArray);
    } else {
      produto.quantity = 1;
      setCart([...cart, produto]);
    }
  };

  const renderizaNaTela = () => {
    return productsList
      .filter((product) => {
        return product.name.toLowerCase().includes(nameFilter.toLowerCase());
      })
      .filter((product) => {
        if (minPriceFilter && maxPriceFilter) {
          return (
            product.price >= minPriceFilter && product.price <= maxPriceFilter
          );
        } else if (minPriceFilter && !maxPriceFilter) {
          return product.price >= minPriceFilter;
        } else if (!minPriceFilter && maxPriceFilter) {
          return product.price <= maxPriceFilter;
        } else {
          return product;
        }
      })
      .sort((atualEstado, proximoEstado) => {
        if (ordem === "a-z") {
          if (atualEstado.name < proximoEstado.name) {
            return -1;
          } else if (atualEstado.name > proximoEstado.name) {
            return 1;
          } else {
            return 0;
          }
        } else if (ordem === "z-a") {
          if (atualEstado.name < proximoEstado.name) {
            return 1;
          } else if (atualEstado.name > proximoEstado.name) {
            return -1;
          } else {
            return 0;
          }
        } else if (ordem === "menorPreco") {
          if (atualEstado.price < proximoEstado.price) {
            return -1;
          } else if (atualEstado.price > proximoEstado.price) {
            return 1;
          } else {
            return 0;
          }
        } else if (ordem === "maiorPreco") {
          if (atualEstado.price < proximoEstado.price) {
            return 1;
          } else if (atualEstado.price > proximoEstado.price) {
            return -1;
          } else {
            return 0;
          }
        }
      })
      .map((product) => (
        <ProductCard
          product={product}
          key={product.id}
          adicionarProdutoCart={adicionarProdutoCart}
        />
      ));
  };

  return (
    <HomeContainer>
      <Info>
        <div>
          <p>Quantidade de produtos: {renderizaNaTela().length}</p>
        </div>
        <div>
          Ordenar:
          <Select value={ordem} onChange={handleOrdem}>
            <option value="">Escolher</option>
            <option value="a-z">A - Z</option>
            <option value="z-a">Z - A</option>
            <option value="menorPreco">Menor Preço</option>
            <option value="maiorPreco">Maior Preço</option>
          </Select>
        </div>
      </Info>
      <Cards>{renderizaNaTela()}</Cards>
    </HomeContainer>
  );
};
