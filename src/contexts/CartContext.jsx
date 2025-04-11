import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  //Cart state
  const [cart, setCart] = useState([]);

  //Item amount state

  const [itemAmt, setItemAmt] = useState(0);

  // total state

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = cart.reduce((prev, curr) => {
      return prev + curr.price * curr.amount;
    }, 0);
    setTotal(total);
  });

  useEffect(() => {
    const amount = cart.reduce((previous, current) => {
      return previous + current.amount;
    }, 0);
    setItemAmt(amount);
  }, [cart]);

  // Add to cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  //remove from cart
  const removeCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  //Clear cart

  const clearCart = () => {
    setCart([]);
  };

  // increase amount

  const increaseAmt = (id) => {
    const item = cart.find((item) => item.id === id);
    addToCart(item, id);
  };

  // decrease amount

  const decreaseAmt = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartItem.amount < 2) {
      removeCart(id);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeCart,
        clearCart,
        increaseAmt,
        decreaseAmt,
        itemAmt,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
