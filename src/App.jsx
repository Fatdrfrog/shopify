import { useState } from "react";
import { Navbar } from "./component/Navbar";
import { Showcase } from "./component/Showcase";
import { ShopifyTheme } from "./ShopifyTheme";
import { AppContext } from "./Context";

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
        <Showcase />
      </ShopifyTheme>
    </AppContext.Provider>
  );
}

export default App;
