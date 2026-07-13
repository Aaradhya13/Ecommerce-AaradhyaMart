import React from "react";
import { useCart } from "../../context/cart";
import {
  addProductToCart,
  decreaseProductQuantity,
  getProductQuantity,
  increaseProductQuantity,
} from "../../utils/cart";

const AddToCartControl = ({ product, className = "" }) => {
  const [cart, setCart] = useCart();
  const quantity = getProductQuantity(product?._id, cart);

  if (!quantity) {
    return (
      <button
        className={`btn btn-dark add-cart-btn ${className}`}
        onClick={() => addProductToCart(product, cart, setCart)}
      >
        ADD TO CART
      </button>
    );
  }

  return (
    <div className={`quantity-control ${className}`}>
      <button
        type="button"
        className="quantity-btn"
        onClick={() => decreaseProductQuantity(product._id, cart, setCart)}
        aria-label="Decrease quantity"
      >
        -
      </button>
      <span>{quantity}</span>
      <button
        type="button"
        className="quantity-btn"
        onClick={() => increaseProductQuantity(product._id, cart, setCart)}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
};

export default AddToCartControl;
