import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Showcase } from "./components/Showcase";
import { MarvelThemeContext } from "./MarvelThemeContext";
import { AppContext } from "./Context";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddtoCart = (item) => {
    const alreadyinCart = cartItems.find((el) => el.id === item.id);

    if (alreadyinCart) return;
    setCartItems((prevCarts) => [item, ...prevCarts]);
  };

  return (
    <MarvelThemeContext>
      <AppContext.Provider
        value={{
          cartItems,
          handleAddtoCart,
        }}
      >
        <div
          className="App"
          style={{
            display: "grid",
            gridTemplateRows: "64px 1fr",
            width: "100vw",
            height: "100vh",
          }}
        >
          <Navbar />
          <Showcase />
        </div>
      </AppContext.Provider>
    </MarvelThemeContext>
  );
}

export default App;
