import { useState, useContext, createContext, useEffect } from "react";
import { normalizeCartItem } from "../utils/cart";

const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    let existingCartItem = localStorage.getItem("cart");
    if (existingCartItem) {
      const normalizedCart = JSON.parse(existingCartItem).map(normalizeCartItem);
      setCart(normalizedCart);
      localStorage.setItem("cart", JSON.stringify(normalizedCart));
    }
  }, []);

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
};

// custom hook
const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
