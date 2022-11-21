import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import { Navbar } from "./component/Navbar";
import { Showcase } from "./component/Showcase";
import { Cart } from "./component/Cart";
import { ShopifyTheme } from "./ShopifyTheme";
import { AppContext } from "./Context";
import { ProductDetail } from "./component/ProductDetail";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    const isItemAleadyInCart = cartItems.find((el) => el._id === item._id);
    if (isItemAleadyInCart) return;
    setCartItems((prevCart) => [item, ...prevCart]);
  };

  return (
    <AppContext.Provider value={{ cartItems, handleAddToCart }}>
      <ShopifyTheme>
        <Navbar />
        <Router>
          <Routes>
            <Route path="/" element={<Showcase />}>
              <Route path="/:productID" element={<ProductDetail />}></Route>
            </Route>
            <Route path="*" element={<>notFound page</>}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </Router>
      </ShopifyTheme>
    </AppContext.Provider>
  );
}

export default App;
