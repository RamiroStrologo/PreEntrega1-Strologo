import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Index from "./components/pages/main/Main";
import Tienda from "./components/pages/tienda/Tienda";
import ItemListContainer from "./components/itemListContainer/ItemListContainer/";

function App() {
  return (
    <>
      <Header />
      <Tienda />
      {/* <Index /> */}
      <Footer />
    </>
  );
}

export default App;
