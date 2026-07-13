import React, { useState } from "react";
import Layout from "./../components/Layout/Layout";
import { useCart } from "../context/cart";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";
import "../styles/CartStyles.css";
import {
  decreaseProductQuantity,
  getCartQuantity,
  increaseProductQuantity,
  removeProductFromCart,
} from "../utils/cart";

const CartPage = () => {
  const [auth] = useAuth();
  const [cart, setCart] = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const cartQuantity = getCartQuantity(cart);

  // Total price calculation
  const totalPrice = () => {
    try {
      const total =
        cart?.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0) ||
        0;
      return total.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Remove item from cart
  const removeCartItem = (pid) => {
    try {
      removeProductFromCart(pid, cart, setCart);
    } catch (error) {
      console.log(error);
    }
  };

  // Handle payment and redirect
  const handlePayment = async () => {
    try {
      setLoading(true);
      // Step 1: Alert user that order will be placed once the transaction is successful
      alert("Your order will be placed once the transaction is successful.");

      // Step 2: Clear the cart
      setCart([]);
      localStorage.setItem("cart", JSON.stringify([]));

      // Step 3: Redirect to the Stripe dummy payment page (open in new tab)
      window.open("https://checkout.stripe.dev/preview", "_blank");

      // Step 4: Redirect back to cart page after 10 seconds
      setTimeout(() => {
        navigate("/cart");
      }, 10000); // 10 seconds delay
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="container cart-page">
        <div className="cart-hero">
          <p>Shopping Cart</p>
          <h1>{auth?.user?.name ? `Hello ${auth.user.name}` : "Your Cart"}</h1>
          <h4>
            {cartQuantity
              ? `${cartQuantity} item${cartQuantity > 1 ? "s" : ""} ready for checkout${
                  auth?.token ? "" : " - please login to checkout"
                }`
              : "Your cart is empty"}
          </h4>
        </div>

        <div className="row cart-layout">
          <div className="col-lg-8">
            {cart?.length < 1 && (
              <div className="empty-cart-panel">
                <h3>No products in your cart yet</h3>
                <p>Browse the collection and add your favorite watches here.</p>
                <button className="btn btn-primary" onClick={() => navigate("/")}>
                  Continue Shopping
                </button>
              </div>
            )}

            {cart?.map((p) => (
              <div className="cart-item" key={p._id}>
                <div className="cart-item-image">
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    alt={p.name}
                  />
                </div>
                <div className="cart-item-info">
                  <h5>{p.name}</h5>
                  <p>{p.description.substring(0, 90)}...</p>
                  <strong>
                    {p.price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </strong>
                  <span className="cart-line-total">
                    Line total:{" "}
                    {(p.price * (p.quantity || 1)).toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </span>
                </div>
                <div className="cart-item-actions">
                  <div className="quantity-control cart-quantity-control">
                    <button
                      type="button"
                      className="quantity-btn"
                      onClick={() =>
                        decreaseProductQuantity(p._id, cart, setCart)
                      }
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span>{p.quantity || 1}</span>
                    <button
                      type="button"
                      className="quantity-btn"
                      onClick={() =>
                        increaseProductQuantity(p._id, cart, setCart)
                      }
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeCartItem(p._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="col-lg-4">
            <div className="cart-summary">
            <h2>Cart Summary</h2>
            <p>Total | Checkout | Payment</p>
            <hr />
            <h4>Total: {totalPrice()}</h4>
            {auth?.user?.address ? (
              <>
                <div className="mb-3">
                  <h4>Current Address</h4>
                  <h5>{auth?.user?.address}</h5>
                  <button
                    className="btn btn-outline-warning"
                    onClick={() => navigate("/dashboard/user/profile")}
                  >
                    Update Address
                  </button>
                </div>
              </>
            ) : (
              <div className="mb-3">
                {auth?.token ? (
                  <button
                    className="btn btn-outline-warning"
                    onClick={() => navigate("/dashboard/user/profile")}
                  >
                    Update Address
                  </button>
                ) : (
                  <button
                    className="btn btn-outline-warning"
                    onClick={() =>
                      navigate("/login", {
                        state: "/cart",
                      })
                    }
                  >
                    Please Login to checkout
                  </button>
                )}
              </div>
            )}
            <div className="mt-2">
              {cartQuantity ? (
                <button
                  className="btn btn-primary"
                  onClick={handlePayment}
                  disabled={loading || !auth?.user?.address}
                >
                  {loading ? "Processing ...." : "Make Payment"}
                </button>
              ) : (
                ""
              )}
            </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
