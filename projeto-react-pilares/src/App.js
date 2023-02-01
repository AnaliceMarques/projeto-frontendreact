import "./App.css";
import { Footer } from "./Componentes/Footer/Footer";
import { Header } from "./Componentes/Header/Header";
import { Home } from "./Componentes/ProductList/Home/Home";
import { Filters } from "./Componentes/Filters/Filters";
import { Cart } from "./Componentes/ShoppingCart/Cart/Cart";

function App() {
  return (
    <div>
      <Header />
      <Filters />
      <Home />
      <Cart />
      <Footer />
    </div>
  );
}

export default App;
