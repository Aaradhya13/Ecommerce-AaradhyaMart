import toast from "react-hot-toast";

export const normalizeCartItem = (item) => ({
  ...item,
  quantity: item?.quantity && item.quantity > 0 ? item.quantity : 1,
});

export const getCartQuantity = (cart) =>
  cart?.reduce((total, item) => total + (item.quantity || 1), 0) || 0;

export const getProductQuantity = (productId, cart) =>
  cart?.find((item) => item._id === productId)?.quantity || 0;

export const saveCart = (cart, setCart) => {
  setCart(cart);
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const addProductToCart = (product, cart, setCart) => {
  if (!product?._id) return;

  const normalizedCart = (cart || []).map(normalizeCartItem);
  const existingItem = normalizedCart.find((item) => item._id === product._id);
  const updatedCart = existingItem
    ? normalizedCart.map((item) =>
        item._id === product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    : [...normalizedCart, { ...product, quantity: 1 }];

  saveCart(updatedCart, setCart);
  toast.success(existingItem ? "Quantity updated" : "Item added to cart");
};

export const decreaseProductQuantity = (productId, cart, setCart) => {
  const updatedCart = (cart || [])
    .map(normalizeCartItem)
    .map((item) =>
      item._id === productId ? { ...item, quantity: item.quantity - 1 } : item
    )
    .filter((item) => item.quantity > 0);

  saveCart(updatedCart, setCart);
};

export const increaseProductQuantity = (productId, cart, setCart) => {
  const updatedCart = (cart || []).map(normalizeCartItem).map((item) =>
    item._id === productId ? { ...item, quantity: item.quantity + 1 } : item
  );

  saveCart(updatedCart, setCart);
};

export const removeProductFromCart = (productId, cart, setCart) => {
  const updatedCart = (cart || []).filter((item) => item._id !== productId);
  saveCart(updatedCart, setCart);
};
