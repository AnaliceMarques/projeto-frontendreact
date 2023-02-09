import styled from "styled-components";
import { useState } from "react";
import { GlobalStyle } from "./GlobalStyle";
//Array de Produtos - Banco de dados
import { products } from "./assents/productList";
//Meus Componentes
import { Filters } from "./Componentes/Filters/Filters";
import { Cart } from "./Componentes/ShoppingCart/Cart/Cart";
import { Footer } from "./Componentes/Footer/Footer";
import { Header } from "./Componentes/Header/Header";
import { Home } from "./Componentes/ProductList/Home/Home";
//Renderização de Tela
// import { HomePage } from "./Componentes/Pages/HomePage";
// import { DetailsPage } from "./Componentes/Pages/DetailsPage";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
`;

function App() {
  const [nameFilter, setNameFilter] = useState("");

  const [minPriceFilter, setMinPriceFilter] = useState("");
  const [maxPriceFilter, setMaxPriceFilter] = useState("");

  const [cart, setCart] = useState([]);

  //ESTADO PARA O VALOR TOTAL
  const [amount, setAmount] = useState("");

  return (
    <Container>
      <GlobalStyle />
      <Header />
      {/* <HomePage /> */}
      {/* <DetailsPage /> */}
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
          amount={amount}
          setAmount={setAmount}
          cart={cart}
          setCart={setCart}
        />
        <Cart
          cart={cart}
          setCart={setCart}
          amount={amount}
          setAmount={setAmount}
        />
      </Main>
      <Footer />
    </Container>
  );
}
export default App;

// function increaseCartQuantity(id: number) {
//     setCartItems((currItems) => {
//       if (currItems.find((item) => item.id === id) == null) {
//         return [...currItems, { id, quantity: 1 }];
//       } else {
//         return currItems.map((item) => {
//           if (item.id === id) {
//             return { ...item, quantity: item.quantity + 1 };
//           } else {
//             return item;
//           }
//         });
//       }
//     });
//   }
