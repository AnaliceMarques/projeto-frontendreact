import styled from "styled-components";
import { useState, useEffect } from "react";
import { GlobalStyle } from "./GlobalStyle";
//Array de Produtos - Banco de dados
import { products } from "./assents/productList";
//Meus Componentes
import { Filters } from "./Componentes/Filters/Filters";
import { Cart } from "./Componentes/ShoppingCart/Cart/Cart";
import { Footer } from "./Componentes/Footer/Footer";
import { Header } from "./Componentes/Header/Header";
import { Home } from "./Componentes/ProductList/Home/Home";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  min-height: 72vh;
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;

function App() {
  const [nameFilter, setNameFilter] = useState("");

  const [minPriceFilter, setMinPriceFilter] = useState("");
  const [maxPriceFilter, setMaxPriceFilter] = useState("");

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const stringProduct = JSON.stringify(cart);
    if (cart.length > 0) {
      localStorage.setItem("carrinho", stringProduct);
    }
  }, [cart]);

  useEffect(() => {
    const getCart = localStorage.getItem("carrinho");
    const arrayCart = JSON.parse(getCart);
    if (arrayCart) {
      setCart(arrayCart);
    }
  }, []);

  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Main>
        <Filters
          nameFilter={nameFilter}
          setNameFilter={setNameFilter}
          minPriceFilter={minPriceFilter}
          setMinPriceFilter={setMinPriceFilter}
          maxPriceFilter={maxPriceFilter}
          setMaxPriceFilter={setMaxPriceFilter}
        />
        <Home
          productsList={products}
          nameFilter={nameFilter}
          minPriceFilter={minPriceFilter}
          maxPriceFilter={maxPriceFilter}
          cart={cart}
          setCart={setCart}
        />
        <Cart cart={cart} setCart={setCart} />
      </Main>
      <Footer />
    </Container>
  );
}
export default App;
